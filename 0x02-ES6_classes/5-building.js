export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') throw new TypeError('Sqft must be a number');
    if (new.target === Building) throw new TypeError('Can\'t construct Building instances directly');
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  static evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
