import { GET, View } from '@rester/core';
import { Version } from './version.model';

@View('version')
export class VersionView {

  private version: Version = {
    major: 0,
    minor: 0,
    patch: 0,
    type: 'beta'
  };

  @GET('')
  async getVersion() {
    return this.version;
  }

}
