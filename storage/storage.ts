import { promises as fsp } from "fs";

export default interface ICard {
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
  id: string;
}

const fileName = "items.json";

const filePath = `${__dirname}/${fileName}`;

const readItemList = async (): Promise<ICard[]> => {
  let list: ICard[] = [];

  try {
    const content = fsp.readFile(filePath, "utf8");
    const parsedList = JSON.parse(await content);

    if (!Array.isArray(list)) {
      throw new Error();
    }
    list = parsedList;
  } catch (e) {
    console.log(e.message);
  }

  return list;
};

const writeItemList = async (list: ICard[]): Promise<ICard[]> => {
  const stringifyList = JSON.stringify(list);

  await fsp.writeFile(filePath, stringifyList, "utf8");

  return list;
};

const listAll = async () => {
  return readItemList();
};

const getById = async (id: string): Promise<ICard | undefined> => {
  const list = await readItemList();

  return list.find((i) => {
    return i.id === id;
  });
};

const create = async (item: ICard): Promise<ICard | undefined> => {
  const list = await readItemList();

  list.push(item);

  await writeItemList(list);

  return item;
};

const update = async (item: ICard): Promise<ICard> => {
  const list = await readItemList();

  const index = list.findIndex((i) => {
    return i.id === item.id;
  });

  if (index !== -1) {
    throw new Error();
  }

  list[index] = item;

  await writeItemList(list);

  return item;
};

const remove = async (id: string): Promise<void> => {
  const list = await readItemList();

  const index = list.findIndex((i) => {
    return i.id === id;
  });

  list.splice(index - 1, 1);

  await writeItemList(list);
};

export { getById, listAll, create, update, remove };
