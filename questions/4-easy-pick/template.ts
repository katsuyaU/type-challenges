type MyPick<T extends {}, K extends keyof T> = {
  [Key in Extract<keyof T, K>]: T[Key]
}
