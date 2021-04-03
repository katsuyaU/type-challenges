type MyReturnType<T> = T extends (...args: any) => infer I ? I : never
