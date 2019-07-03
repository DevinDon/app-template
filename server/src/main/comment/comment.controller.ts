import { Controller, Inject, PathVariable, POST, RequestBody, HTTP400Exception, GET } from '@rester/core';
import { BaseResponse, response } from '../model/response.model';
import { Comment } from './comment.entity';
import { CommentService } from './comment.service';

@Controller('/comment')
export class CommentController {

  @Inject()
  private service!: CommentService;

  @POST('/')
  async add(@RequestBody() comment: Comment): Promise<BaseResponse<Comment>> {
    comment.id = undefined as any;
    comment.date = Date.now();
    comment.dislike = 0;
    comment.like = 0;
    if (!comment.belong || !comment.content) {
      throw new HTTP400Exception('field belong & content is required');
    }
    const result = await this.service.add(comment);
    return response({
      status: Boolean(result),
      content: result
    });
  }

  @GET('/count/{{belong}}')
  async count(@PathVariable('belong') belong: number): Promise<BaseResponse<number>> {
    return response({
      status: true,
      content: await this.service.count(+belong)
    });
  }

  @GET('/counts/{{belongs}}')
  async counts(@PathVariable('belongs') belongs: string): Promise<BaseResponse<{ [index: number]: number }>> {
    return response({
      status: true,
      content: await this.service.counts(belongs.split(',').map(belong => +belong))
    });
  }

  @GET('/hero/{{belong}}/{{offset}}')
  async getAboutHero(@PathVariable('belong') belong: number, @PathVariable('offset') offset: number): Promise<BaseResponse<Comment[]>> {
    return response({
      status: true,
      content: await this.service.getAboutHero(+belong, +offset)
    });
  }

  @GET('/reply/{{reply}}/{{offset}}')
  async getAboutReply(@PathVariable('reply') reply: number, @PathVariable('offset') offset: number) {
    const result = await this.service.getAboutReply(reply, offset);
    return response({
      status: result.length > 0,
      content: result
    });
  }

  @GET('/origin/{{id}}')
  async getReplyOrigin(@PathVariable('id') id: number): Promise<BaseResponse<Comment[]>> {
    return response({
      status: true,
      content: await this.service.getReplyOrigin(+id)
    });
  }

  @POST('/like/{{id}}')
  async like(@PathVariable('id') id: number): Promise<BaseResponse<number>> {
    const result = await this.service.like(+id);
    return response({
      status: result !== -1,
      content: result
    });
  }

}
