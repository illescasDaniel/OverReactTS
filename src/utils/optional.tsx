import { isNullOrUndefined } from 'util'

type Nullable<T> = T | null | undefined

export default class Optional<T> {

  public static of<T>(value: Nullable<T>) {
    return new Optional(value)
  }

  private _value: Nullable<T>

  constructor(value: Nullable<T>) {
    this._value = value
  }

  public get isPresent() {
    return !isNullOrUndefined(this._value)
  }

  public assign(value: Nullable<T>) {
    this._value = value
  }

  public ifPresent<U>(functor: (_: T) => Nullable<U>) {
    if (this.isPresent) {
      return Optional.of<U>(functor(this._value as T))
    }
    return Optional.of<U>(null)
  }

  public ifPresentDo<U>(functor: (_: T) => Nullable<U>) {
    if (this.isPresent) {
      functor(this._value as T)
    }
  }

  public _ = <U extends {}>(f: (_: T) => Nullable<U>) => this.ifPresent(f)
  public __ = (value: T) => this.orElse(value)
  public ___ = <U extends {}>(value: Nullable<U> | Optional<U>) => this.or(value)

  public orElse(value: T) {
    return this.isPresent ? this._value : value
  }

  public or<U>(value: Nullable<U> | Optional<U>) {
    return this.isPresent ? this._value : value
  }
}