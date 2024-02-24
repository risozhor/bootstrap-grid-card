import { css } from 'lit';
import bootstrapGridStyle from 'bootstrap/dist/css/bootstrap.min.css';

const style = [bootstrapGridStyle, css`
    :host {
        box-sizing: border-box;
    }
    ha-card {
        padding: 0;
    }
    `];

export default style;
