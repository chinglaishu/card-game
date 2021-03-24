import utilfunction from "../utils/utilfunction";

const helperfunction = {
  iconList: ["checkcircleo", "closecircleo", "book", "clockcircleo",
    "frown", "mail", "home", "meh"],
  createCardDataList() {
    const doubleIconList = this.iconList.concat(this.iconList);
    utilfunction.shuffleList(doubleIconList);
    return doubleIconList.map((icon: string) => {
      return {
        icon,
        state: 0,
        flipUpdateNum: 0,
      };
    });
  },
  checkMatchIcon(cardDataList: CardData[], i: number, a: number) {
    return cardDataList[i].icon === cardDataList[a].icon;
  },
  checkFinish(cardDataList: CardData[]) {
    for (let i = 0 ; i < cardDataList.length ; i++) {
      if (cardDataList[i].state !== 2) {return false; }
    }
    return true;
  },
  checkIsValidName(name: any) {
    if (!name) {return false; }
    if (name.length === 0) {return false; }
    if (name.includes(" ")) {return false; }
    return true;
  },
};

export default helperfunction;
