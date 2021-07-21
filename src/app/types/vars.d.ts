/**
 * *todoi 最小单元
 */
export interface TodoiBase {
  checked: boolean;
  title: string;
  id: number;
  createTime: Date;
}

export interface TodoiItem extends TodoiBase {
  children?: TodoiBase;
}

export type TodoiList = TodoiItem[];
