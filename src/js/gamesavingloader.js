import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const prossedData = await json(data);

    return JSON.parse(prossedData);
  }
}
