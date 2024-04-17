export default function getOptions() {
    const options2 = {
        level1: {
          "1": {
            group: "global",
            label: "Electrical",
            key: "fElectrical",
            type: "radio",
            options: {
              single: "Single",
              multi: "Multi",
            },
            defaultVisibility: "true",
            dependsOn: "",
            children: {},
          },
          "2": {
            group: "global",
            label: "Body Gauge",
            key: "fGauge",
            type: "radio",
            options: {
              "20": "20",
              "18": "18",
              "16": "16",
            },
            parent: "",
            defaultVisibility: "true",
            dependsOn: "",
            children: {},
          },
          "3": {
            group: "global",
            label: "Height",
            key: "fHeight",
            type: "radio",
            options: {
              "20": "20",
              "18": "18",
              "19": "19",
            },
            parent: "",
            defaultVisibility: "true",
            dependsOn: "",
            children: {},
          },
          "4": {
            group: "global",
            label: "Support Type",
            key: "support_type",
            type: "radio",
            options: {
              casters: "Casters",
              leg: "Leg",
            },
            parent: "",
            defaultVisibility: "true",
            dependsOn: "",
            children: {},
          },
          "5": {
            group: "global",
            label: "Depth",
            key: "depth",
            type: "radio",
            options: {
              "24": "24",
              "26": "26",
              "28": "28",
              "30": "30",
              "34": "34",
              "35": "35",
              "36": "36",
            },
            parent: "",
            defaultVisibility: "true",
            dependsOn: "",
            children: {},

          },
          "6": {
            group: "global",
            label: "Finish",
            key: "finish",
            type: "radio",
            options: {
              "#FFF": "Bright White",
              "#E97451": "Brown KickPlate",
              "#954535": "Fence Green",
              "#D27D2D": "Hollyberry Red",
              "#B87333": "Natural Almond",
              "#FF5733": "Orange",
              "#A95C68": "Racing Red",              
            },
            parent: "",
            defaultVisibility: "true",
            dependsOn: "",
            children: {},

          },
          "13": {
            group: "global",
            label: "Electrical",
            key: "ffElectrical",
            type: "radio",
            options: {
              single: "Single",
              multi: "Multi",
            },
            defaultVisibility: "true",
            dependsOn: "",
            children: {},
          },
          "7": {
            group: "global",
            label: "Body Gauge",
            key: "ffGauge",
            type: "radio",
            options: {
              "20": "20",
              "18": "18",
              "16": "16",
              "19": "19",
              "22": "22",
              "25": "25",
            },
            parent: "",
            defaultVisibility: "true",
            dependsOn: "",
            children: {},
          },
          "8": {
            group: "global",
            label: "Height",
            key: "ffHeight",
            type: "radio",
            options: {
              "20": "20",
              "18": "18",
              "19": "19",
            },
            parent: "",
            defaultVisibility: "true",
            dependsOn: "",
            children: {},
          },
          "9": {
            group: "global",
            label: "Support Type",
            key: "fsupport_type",
            type: "radio",
            options: {
              casters: "Casters",
              leg: "Leg",
            },
            parent: "",
            defaultVisibility: "true",
            dependsOn: "",
            children: {},
          },
          "10": {
            group: "global",
            label: "Depth",
            key: "fdepth",
            type: "radio",
            options: {
              "24": "24",
              "26": "26",
              "28": "28",
              "30": "30",
              "34": "34",
              "35": "35",
              "36": "36",
            },
            parent: "",
            defaultVisibility: "true",
            dependsOn: "",
            children: {},

          },
          "11": {
            group: "global",
            label: "Finish",
            key: "ffinish",
            type: "radio",
            options: {
              "#fff": "Bright White",
              "#E97451": "Brown KickPlate",
              "#954535": "Fence Green",
              "#D27D2D": "Hollyberry Red",
              "#B87333": "Natural Almond",
              "#FF5733": "Orange",
              "#A95C68": "Racing Red",              
            },
              parent: "",
            defaultVisibility: "true",
            dependsOn: "",
            children: {},

          },
        },
        level2: {
          "1": {
            group: "global",
            label: "Tray Slides",
            key: "ftray_slides",
            type: "checkbox",
            options: {},
            defaultVisibility: "true",
            dependsOn: "",
            children: {
              "1": {
                group: "global",
                label: "Location",
                key: "fKPLocation",
                type: "select",
                options: {
                  customer: "Customer",
                  operator: "Operator",
                },
                parent: "",
                defaultVisibility: "true",
                dependsOn: "",
                children: {},
              },
              "2": {
                group: "global",
                label: "Style",
                key: "style",
                type: "select",
                options: {
                  "3bar": "3 Bar",
                  solid: "Solid",
                  extendedTop: "Extended Top",
                },
                parent: "",
                defaultVisibility: "true",
                dependsOn: "",
                children: {},
              },
              "3": {
                group: "global",
                label: "Brackets",
                key: "brackets",
                type: "select",
                options: {
                  fixed: "Fixed",
                  hinged: "Hinged",
                },
                parent: "",
                defaultVisibility: "true",
                dependsOn: "",
                children: {},
              },
            },
          },
        },
    };
    return options2;
}