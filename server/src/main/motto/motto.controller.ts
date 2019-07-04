import { Controller, DELETE, GET, Inject, PathVariable, POST, PUT, RequestBody } from '@rester/core';
import { response } from '../model/response.model';
import { Motto } from './motto.entity';
import { MottoService } from './motto.service';

@Controller('/motto')
export class MottoController {

  @Inject()
  private service!: MottoService;

  @POST('/')
  async addOne(@RequestBody() motto: Motto) {
    const result = await this.service.addOne(motto);
    return response({
      status: Boolean(result),
      content: result
    });
  }

  @DELETE('/{{id}}')
  async removeOneByID(@PathVariable('id') id: number) {
    return response({
      status: await this.service.removeOneByID(+id)
    });
  }

  @PUT('/{{id}}')
  async modifyOneByID(@PathVariable('id') id: number, @RequestBody() motto: Motto) {
    const result = await this.service.modifyOneByID(+id, motto);
    return response({
      status: Boolean(result),
      content: result
    });
  }

  @GET('/{{id}}')
  async getOneByID(@PathVariable('id') id: number) {
    const result = await this.service.getOneByID(+id);
    return response({
      status: Boolean(result),
      content: result
    });
  }

  @GET('/')
  async getOneByRandom() {
    const result = await this.service.getOneByRandom();
    return response({
      status: Boolean(result),
      content: result
    });
  }

}
