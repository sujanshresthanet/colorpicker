import BaseColorPicker from '~/colorpicker/BaseColorPicker';
import _ColorPalette from '~/colorpicker/ui/ColorPalette';
import CurrentColorSets from '~/colorpicker/ui/CurrentColorSets';
import Control from './Control';
import './index.scss';


export default class MiniColorPicker extends BaseColorPicker {

  components() {
    return {
      palette: _ColorPalette,
      control: Control,
      currentColorSets: CurrentColorSets,
    }
  }

  template() {
    return `
      <div class="el-colorpicker__wrap">
        <div class="el-colorpicker__body">
          <div class="el-colorpicker__palette">
            <template target="palette"></template>
          </div>
          <template target="control"></template>
        </div>
        <template target="currentColorSets"></template>
      </div>
    `;
  }

}