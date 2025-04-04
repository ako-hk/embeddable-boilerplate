import { mergician } from 'mergician';
import { Theme } from '@embeddable.com/vanilla-components';

const themeProvider = (clientContext: any, parentTheme: Theme): Theme => {
  /*
   * This allows for switching between the default and custom theme in the
   * builder based on presets/client-contexts.cc.yml. You can remove this
   * code if you don't want to do theme switching.
   */
  if (clientContext?.theme === 'default') {
    return parentTheme;
  }

  const theme: Theme = {
    isParent: false,
    brand: {
      primary: '#002954', // sharp navy blue
      secondary: '#974287', // vibrant purple
    },
    charts: {
      colors: [
        '#002954', // deep navy blue
        '#2a567d', // royal blue
        '#974287', // vibrant purple
        '#c21d7a', // magenta-purple
        '#00a0ff', // electric blue
        '#00d4b3', // vibrant teal
        '#7effc3', // bright aqua-green
        '#003344', // dark teal
      ],
      options: {
        toolTipEnabled: true,
        usePointStyle: true,
      },
      textJustify: 'center',
      fontWeights: {
        description: 400,
        kpiNumber: 600,
        pagination: 500,
        title: 700,
      },
      bar: {
        borderRadius: {
          topRight: 8,
          topLeft: 8,
          bottomRight: 8,
          bottomLeft: 8,
        },
        borderSkipped: 'middle',
        borderWidth: 2,
        colors: ['#002954', '#2a567d', '#974287', '#c21d7a'],
        font: {
          size: 12,
        },
      },
      bubble: {
        colors: ['#974287', '#c21d7a', '#00a0ff', '#00d4b3'],
        font: {
          size: 12,
        },
      },
      kpi: {
        alignment: 'center',
        colors: ['#002954', '#974287'],
        font: {
          negativeColor: '#ff0000', // red for negative values
          size: 14,
        },
      },
      line: {
        colors: ['#2a567d', '#974287', '#00a0ff'],
        font: {
          size: 12,
        },
        lineTension: 0.4,
      },
      pie: {
        colors: ['#002954', '#2a567d', '#974287', '#c21d7a'],
        font: {
          size: 12,
        },
      },
      scatter: {
        colors: ['#00a0ff', '#974287', '#00d4b3'],
        font: {
          size: 12,
        },
      },
    },
    container: {
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      padding: '16px',
      border: '1px solid #e0e0e0',
    },
    controls: {
      backgrounds: {
        colors: {
          heavy: '#002954',
          normal: '#974287',
          soft: '#f4f4f4',
          transparent: 'transparent',
        },
      },
      buttons: {
        active: {
          background: '#974287',
          fontColor: '#ffffff',
          border: '1px solid #002954',
        },
        hovered: {
          background: '#2a567d',
          fontColor: '#ffffff',
          border: '1px solid #002954',
        },
        pressed: {
          background: '#000000', // solid black
          fontColor: '#ffffff',
          border: '1px solid #002954',
        },
        fontSize: '14px',
        height: '40px',
        paddingY: '8px',
        paddingX: '16px',
        radius: '4px',
      },
      borders: {
        colors: {
          normal: '#974287',
          heavy: '#002954',
        },
        padding: 2,
        radius: '4px',
      },
      inputs: {
        colors: {
          hover: '#808080', // gray
          selected: '#002954',
        },
      },
      tooltips: {
        radius: '4px',
      },
    },
    dateFormats: {
      year: 'YYYY',
      quarter: "Q'Q' YYYY", // Escaping 'Q' as a literal
      month: 'MMM YYYY',
      day: 'dd MMM YYYY',
      week: "'W'ww yyyy", // Escaping 'W' as a literal
      hour: 'HH:mm',
      minute: 'HH:mm:ss',
      second: 'HH:mm:ss.SSS',
    },
  
    font: {
      color: '#002954',
      colorNormal: '#974287',
      colorSoft: '#b0b0b0',
      family: 'Noto Serif',
      size: '14px',
      weight: 400,
      imports: {
        google: 'https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap',
      },
    },
    png: {
      backgroundColor: '#ffffff',
    },
    svg: {
      fillBkg: '#002954',
      fillStrong: '#974287',
      fillNormal: '#b0b0b0',
      strokeNormal: '#974287',
      strokeStrong: '#002954',
      strokeSoft: '#e0e0e0',
    },
  };
  
  return theme;
  
}  

export default themeProvider;
