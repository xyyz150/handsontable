import {
  CELL_TYPE,
  TextType,
} from '../';
import {
  getCellType,
  getRegisteredCellTypeNames,
  registerCellType,
} from '../../cellTypes';
import {
  getEditor,
  getRegisteredEditorNames,
} from '../../../editors';
import {
  getRegisteredRendererNames,
  getRenderer,
} from '../../../renderers';
import {
  getRegisteredValidatorNames,
} from '../../../validators';

describe('TextType', () => {
  describe('registering', () => {
    it('should not auto-register after import', () => {
      expect(getRegisteredEditorNames()).toEqual([]);
      expect(() => {
        getEditor('text');
      }).toThrowError();

      expect(getRegisteredRendererNames()).toEqual([]);
      expect(() => {
        getRenderer('text');
      }).toThrowError();

      expect(getRegisteredValidatorNames()).toEqual([]);
      expect(() => {
        getValidator('text');
      }).toThrowError();

      expect(getRegisteredCellTypeNames()).toEqual([]);
      expect(() => {
        getCellType('text');
      }).toThrowError();
    });
    it('should register cell type', () => {
      registerCellType(CELL_TYPE, TextType);

      expect(getRegisteredEditorNames()).toEqual(['text']);
      expect(getEditor('text')).toBeInstanceOf(Function);

      expect(getRegisteredRendererNames()).toEqual(['text']);
      expect(getRenderer('text')).toBeInstanceOf(Function);

      expect(getRegisteredValidatorNames()).toEqual([]);

      expect(getRegisteredCellTypeNames()).toEqual(['text']);
      expect(getCellType('text')).toEqual(TextType);
      expect(getCellType('text')).toEqual({
        editor: getEditor('text'),
        renderer: getRenderer('text'),
      });
    });
  });
});