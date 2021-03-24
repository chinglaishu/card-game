import AsyncStorage from "@react-native-async-storage/async-storage";

const utilfunction = {
  getZeroList(length: number) {
    const numList: number[] = [];
    for (let i = 0 ; i < length ; i++) {
      numList.push(0);
    }
    return numList;
  },
  shuffleList(useList: any[]) {
    for (let i = useList.length - 1 ; i > 0 ; i--) {
      const a = Math.floor(Math.random() * (i + 1));
      [useList[i], useList[a]] = [useList[a], useList[i]];
    }
  },
  async getDataFromStorage(key: string) {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (err) {
      return null;
    }
  },
  async setDataToStorage(key: string, value: string) {
    try {
      await AsyncStorage.setItem(key, String(value));
    } catch (err) {}
  },
};

export default utilfunction;
