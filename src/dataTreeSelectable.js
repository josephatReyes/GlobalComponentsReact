export const  DATA_TREE_SELECTABLE = [{
    name: 'Rignet',
    toggled: true,
    withIcon: true,
    withCircles: true,
    red: 10,
    green: 512,
    yellow: 100,
    gray: 123,
    checked:false,
    labelStyle: { color: '#EF7622', fontWeight: 'bold' },
    menuContext: [{ id: "Option1", icon: "any", label: "Option1" }, 
                  {id: "Option2", icon: "any", label: "Option2", }],
    subMenus: [{ title: 'sub-option', items: [{ title: 'item  1', }, { title: 'item 2' }] },
              { title: 'sub-option 2', items: [{ title: 'item  1', }, { title: 'item 2' }] }
    ],
    children: [

      {
        name: 'Costumer 1',
        labelStyle: { color: 'black', fontWeight: '600' },
        toggled: true,
        loading: true,
        withIcon: true, withCircles: true,
        checked:false,
        children: [
          {
            name: 'Entity 2',
            labelStyle: { color: 'black', fontWeight: '600', marginLeft: '10px' },
            toggled: false,
            loading: true,
            withIcon: true, withCircles: true,
            checked:false,
            children: [

              {
                name: 'Site 1 truck', toggled: true, withIcon: true, withCircles: false,
                icon: { className: 'fas fa-truck', style: { color: '#ef7622', fontSize: '14px', marginLeft: '10px' } },
                menuContext: [{ id: "Option1", icon: "any", label: "Option1" }, {
                  id: "Option2", icon: "any", label: "Option2",

                }],
                subMenus: [{ title: 'sub-option', items: [{ title: 'item  1', }, { title: 'item 2' }] },

                ],
                checked:false,
                children: [
                  {
                    name: "Device site 1",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                    checked:false,
                    children: [
                    ]
                  },
                  {
                    name: "Device site 1",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                    checked:false,
                  }
                ]

              },

              {
                name: 'Site 1 truck', toggled: true, withIcon: true, withCircles: false,
                icon: { className: 'fas fa-truck', style: { color: '#ef7622', fontSize: '14px', marginLeft: '10px' } },
                checked:false,
                children: [
                  {
                    name: "Device site 1",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                    checked:false,
                    children: [
                    ]
                  },
                  {
                    name: "Device site 1",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                    checked:false,
                  }
                ]

              },
            ]
          }
          ,
          {
            name: 'Entity 2',
            labelStyle: { color: 'black', fontWeight: '600', marginLeft: '10px' },
            toggled: false,
            loading: true,
            withIcon: true, withCircles: true,
            checked:false,
            children: [

              {
                name: 'Site 2 truck', toggled: true, withIcon: true, withCircles: false,
                icon: { className: 'fas fa-truck', style: { color: '#ef7622', fontSize: '14px', marginLeft: '10px' } },
                checked:false,
                children: [
                  {
                    name: "Device 1 site 2",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                    checked:false,
                    children: [
                    ]
                  },
                  {
                    name: "Device 3 site 2",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                    checked:false,
                  }
                ]

              },
            ]
          }

        ]
      },

      {
        name: 'Costumer 2',
        labelStyle: { color: 'black', fontWeight: '600' },
        toggled: false,
        loading: true,
        withIcon: true, withCircles: true,
        checked:false,
        children: [

          {
            name: 'Entity 2',
            labelStyle: { color: 'black', fontWeight: '600', marginLeft: '10px' },
            toggled: false,
            loading: true,
            withIcon: true, withCircles: true,
            checked:false,
            children: [

              {
                name: 'Site 1 truck', toggled: true, withIcon: true, withCircles: false,
                icon: { className: 'fas fa-truck', style: { color: '#ef7622', fontSize: '14px', marginLeft: '10px' } },
                checked:false,
                children: [
                  {
                    name: "Device site 1",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                    checked:false,
                    children: [
                    ]
                  },
                  {
                    name: "Device site 1",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                    checked:false,
                  }
                ]

              },

              {
                name: 'Site 1 truck', toggled: true, withIcon: true, withCircles: false,
                icon: { className: 'fas fa-truck', style: { color: '#ef7622', fontSize: '14px', marginLeft: '10px' } },
                checked:false,
                children: [
                  {
                    name: "Device site 1",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                    checked:false,
                    children: [
                    ]
                  },
                  {
                    name: "Device site 1",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                    checked:false,
                  }
                ]

              },
            ]
          }
          ,
          {
            name: 'Entity 2',
            labelStyle: { color: 'black', fontWeight: '600', marginLeft: '10px' },
            toggled: false,
            withIcon: true, withCircles: true,
            checked:false,
            children: [
              {
                name: 'Site 2 truck', toggled: true, withIcon: true, withCircles: false,
                icon: { className: 'fas fa-truck', style: { color: '#ef7622', fontSize: '14px', marginLeft: '10px' } },
                checked:false,
                children: [
                  {
                    name: "Device 1 site 2",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                    checked:false,
                    children: [
                    ]
                  },
                  {
                    name: "Device 2 site 2",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                    checked:false,
                  }
                ]
              },
            ]
          }

        ]
      },
      {
        name: 'Costumer 3',
        labelStyle: { color: 'black', fontWeight: '600' },
        toggled: false,
        loading: true,
        withIcon: true, withCircles: true,
        checked:false,
        children: [

          {
            name: 'Entity 2',
            labelStyle: { color: 'black', fontWeight: '600', marginLeft: '10px' },
            toggled: false,
            loading: true,
            withIcon: true, withCircles: true,
            checked:false,
            children: [

              {
                name: 'Site 1 truck', toggled: true, withIcon: true, withCircles: false,
                icon: { className: 'fas fa-truck', style: { color: '#ef7622', fontSize: '14px', marginLeft: '10px' } },
                checked:false,
                children: [
                  {
                    name: "Device site 1",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                    checked:false,
                    children: [
                    ]
                  },
                  {
                    name: "Device site 1",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                    checked:false,
                  }
                ]

              },

              {
                name: 'Site 1 truck', toggled: true, withIcon: true, withCircles: false, checked:false,
                icon: { className: 'fas fa-truck', style: { color: '#ef7622', fontSize: '14px', marginLeft: '10px' } },
                children: [
                  {
                    name: "Device site 1",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                    checked:false,
                    children: [
                    ]
                  },
                  {
                    name: "Device site 1",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                    checked:false,
                  }
                ]
              },
            ]
          }
          ,
          {
            name: 'Entity 2',
            labelStyle: { color: 'black', fontWeight: '600', marginLeft: '10px' },
            toggled: false,
            loading: true,
            withIcon: true, withCircles: true,
            checked:false,
            children: [

              {
                name: 'Site 2 truck', toggled: true, withIcon: true, withCircles: false, checked:false,
                icon: { className: 'fas fa-truck', style: { color: '#ef7622', fontSize: '14px', marginLeft: '10px' } },
                children: [
                  {
                    name: "Device 1 site 2",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                    checked:false,
                    children: [
                    ]
                  },
                  {
                    name: "Device 2 site 2",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                    checked:false,
                  }
                ]

              },
            ]
          }

        ]
      },

    ]
  },
  ]
