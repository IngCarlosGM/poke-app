export type TypeIcon =
  | 'user'
  | 'search'
  | 'show'
  | 'hide'
  | 'logo'
  | 'exit'
  | 'right-arrow'
  | 'left-arrow'
  | 'caret';

export type TypeButton = 'primary' | 'secondary' | 'third';

export type TypeTitle = 'h1' | 'h2' | 'h3';

export type TypeInput = 'text' | 'password' | 'email' | 'submit';

export interface TypeMenuItem {
  label: string;
  handlerMenuItem: () => void;
}

export interface TypeUser {
  name: string;
  username: string;
  sourceAvatar: string;
}
