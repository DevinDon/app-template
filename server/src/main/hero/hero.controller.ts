import { Controller, DELETE, GET, Inject, PathQuery, PathVariable, POST, PUT, RequestBody } from '@rester/core';
import { BaseResponse, response } from '../model/response.model';
import { Hero } from './hero.entity';
import { HeroService } from './hero.service';

@Controller('/hero')
export class HeroController {

  @Inject()
  private service!: HeroService;

  @POST('/')
  async add(@RequestBody() hero: Hero): Promise<BaseResponse<Hero>> {
    const result = await this.service.add((hero.id = undefined as any, hero));
    return response({
      status: Boolean(result),
      content: result
    });
  }

  @GET('/count')
  async count(): Promise<BaseResponse<number>> {
    return response({
      status: true,
      content: await this.service.count()
    });
  }

  @DELETE('/{{id}}')
  async delete(@PathVariable('id') id: number): Promise<BaseResponse> {
    const result = await this.service.delete(+id);
    return response({
      status: Boolean(result.raw),
      content: id
    });
  }

  @DELETE('/more')
  async deleteMore(@PathQuery('ids') ids: string | undefined): Promise<BaseResponse<number>> {
    if (ids) {
      const arr: number[] = ids.split(',').map(v => +v);
      const result = await this.service.deleteMore(arr);
      return response({
        status: true,
        content: result.affected
      });
    } else {
      return response({ status: false, message: 'Please tell me who you want to delete.' });
    }
  }

  @GET('/{{id}}')
  async get(@PathVariable('id') id: number) {
    const hero = await this.service.get(+id);
    return response({
      status: Boolean(hero),
      content: hero
    });
  }

  @GET('/{{offset}}/limit/{{limit}}')
  async getLimit(@PathVariable('offset') offset: number, @PathVariable('limit') limit: number) {
    return response({
      status: true,
      content: await this.service.getLimit(+offset < 0 ? 0 : +offset, +limit < 0 ? 10 : +limit)
    });
  }

  @GET('/more')
  async getMore(@PathQuery('ids') ids: string | undefined) {
    if (ids) {
      const arr: number[] = ids.split(',').map(v => +v);
      const result = await this.service.getMore(arr);
      return response({
        status: true,
        content: result
      });
    } else {
      return response({
        status: false,
        message: 'Please tell me who you want to know.'
      });
    }
  }

  @GET('/top')
  @GET('/top/{{total}}')
  async getTop(@PathVariable('total') total: number = 5) {
    const result = await this.service.getTop(total);
    return response({
      status: true,
      content: result
    });
  }

  @GET('/all')
  async getAll() {
    const result = await this.service.getAll();
    return response({
      status: true,
      content: result
    });
  }

  @PUT('/{{id}}')
  async updateOne(@PathVariable('id') id: number, @RequestBody() hero: Hero) {
    const result = await this.service.update(+id, hero);
    return response({
      status: Boolean(result),
      content: result
    });
  }

  @POST('/like/{{id}}')
  async like(@PathVariable('id') id: number) {
    const result = await this.service.like(+id);
    return response({
      status: result !== undefined,
      content: result
    });
  }

}
