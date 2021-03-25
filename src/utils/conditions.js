import { color } from "react-native-reanimated";
import { getPixelSizeForLayoutSize } from "react-native/Libraries/Utilities/PixelRatio";

export function condition(condition){
    switch(condition){
        case 'storm': 
        return icon = {
            name: 'rainy-outline',
            color: '#808080'
        };
        break;
        case 'clear_day':
        return icon = {
            name: 'partly-sunny-outline',
            color: '#ffB300'
        };
        break;
        case 'rain':
        return icon = {
            name: 'rainy-outline',
            color: '#1ec9ff'
        };
        break;
            default:
                return icon = {
                    name: 'cloud-outline',
                    color: '#1ec9f3'
                }
    }
}