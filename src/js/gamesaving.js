export default class GameSaving {
  constructor(data) {
    const transformedData = JSON.parse(data);
    this.id = transformedData.id;
    this.created = transformedData.created;
    this.userInfo = transformedData.userInfo;
    this.userInfo.id = transformedData.userInfo.id;
    this.userInfo.name = transformedData.userInfo.name;
    this.userInfo.level = transformedData.userInfo.level;
    this.userInfo.points = transformedData.userInfo.points;
  }
}
