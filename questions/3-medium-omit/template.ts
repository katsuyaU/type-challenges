type MyOmit<T extends {}, K extends keyof any> = {
  [Key in Exclude<keyof T, K>]: T[Key]
}
