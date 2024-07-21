import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },

  {
    component: CNavGroup,
    name: 'ฝ่ายขาย',
    to: '/Sale',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'รายการสินค้า',
        to: '/Sale/AddProduct',
      },
      {
        component: CNavItem,
        name: 'รายการลูกค้า',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'ใบเสนอราคา',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'ใบแจ้งหนี้/ใบวางบิล',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'รายการใบส่งงาน',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'ใบส่งของ',
        to: '/base/list-groups',
      },
      {
        component: CNavItem,
        name: 'ใบเสร็จรับเงิน',
        to: '/base/navs',
      },
      {
        component: CNavItem,
        name: 'ใบหักภาษี ณ ที่จ่าย',
        to: '/base/paginations',
      },
      {
        component: CNavItem,
        name: 'รายการลูกค้านัดจ่าย',
        to: '/base/placeholders',
      },
      {
        component: CNavItem,
        name: 'รายการลูกค้าค้างชำระ',
        to: '/base/popovers',
      },
      {
        component: CNavItem,
        name: 'รายการรอวางบิล',
        to: '/base/progress',
      },
      {
        component: CNavItem,
        name: 'รายการยอดขาย',
        to: '/base/spinners',
      },
      {
        component: CNavItem,
        name: 'ตั้งค่าหักภาษี',
        to: '/base/tables',
      },
      {
        component: CNavItem,
        name: 'ตั้งค่าการชำระเงิน',
        to: '/base/tabs',
      },
      {
        component: CNavItem,
        name: 'หน่วยนับสินค้า',
        to: '/base/tooltips',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'ฝ่ายจัดซื้อ',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'รายการสินค้า',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'รายการผู้จัดจำหน่าย',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'ใบเสนอซื้อ',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'ใบสั่งจ่าย',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'รายการใบเสร็จจ่ายเงิน',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'ใบหักภาษี ณ ที่จ่าย',
        to: '/base/list-groups',
      },
      {
        component: CNavItem,
        name: 'ใบรับสินค้า',
        to: '/base/list-groups',
      },
      {
        component: CNavItem,
        name: 'รายการนัดจ่าย',
        to: '/base/navs',
      },
      {
        component: CNavItem,
        name: 'รายการรอจ่าย',
        to: '/base/paginations',
      },
      {
        component: CNavItem,
        name: 'รายการยอดซื้อ',
        to: '/base/placeholders',
      },
      {
        component: CNavItem,
        name: 'ตั้งค่า การชำระเงิน',
        to: '/base/popovers',
      },
      {
        component: CNavItem,
        name: 'ตั้งค่า หน่วยนับสินค้า',
        to: '/base/progress',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'ฝ่ายคลังสินค้า',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'รายการใบรับสินค้า',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'รายการใบส่งสินค้า',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'รายการสินค้าคงเหลือ',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'รายการเบิกสินค้า',
        to: '/base/carousels',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'ฝ่ายการเงิน',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'รายการฝากเงิน',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'รายการถอนเงิน',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'รายการรับเช็ค',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'รายการจ่ายเช็ค',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'รายการบัญชีธนาคาร',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'สถานะเช็ค',
        to: '/base/list-groups',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'ฝ่ายบุคคล',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'รายการชื่อพนักงาน',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'รายการลงเวลาทำงาน',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'รายการวัดหยุด',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'รายการเงินเดือนพนักงาน',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'รายการสลิปเงินเดือน',
        to: '/base/collapses',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'การตั้งค่าระบบ',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'ข้อมูลบริษัท',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'หน่วยนับสินค้า',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'สถานะการเบิกของ',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'คำนำหน้าชื่อ',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'ตำแหน่งพนักงาน',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'สแผนกฝ่าย',
        to: '/base/list-groups',
      },
      {
        component: CNavItem,
        name: 'หักภาษี',
        to: '/base/list-groups',
      },
      {
        component: CNavItem,
        name: 'การชำระเงิน',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'สถานะเช็ค',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'User',
        to: '/base/list-groups',
      },
      {
        component: CNavItem,
        name: 'ระดับ User',
        to: '/base/list-groups',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'User Setting',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Logout',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Profile',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Forgot Password',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'Reset Password',
        to: '/base/collapses',
      },
    ],
  },
]

export default _nav

// import React from 'react'
// import CIcon from '@coreui/icons-react'
// import {
//   cilBell,
//   cilCalculator,
//   cilChartPie,
//   cilCursor,
//   cilDescription,
//   cilDrop,
//   cilNotes,
//   cilPencil,
//   cilPuzzle,
//   cilSpeedometer,
//   cilStar,
// } from '@coreui/icons'
// import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

// const _nav = [
//   {
//     component: CNavItem,
//     name: 'Dashboard',
//     to: '/dashboard',
//     icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
//     badge: {
//       color: 'info',
//       text: 'NEW',
//     },
//   },
//   {
//     component: CNavTitle,
//     name: 'Theme',
//   },
//   {
//     component: CNavItem,
//     name: 'Colors',
//     to: '/theme/colors',
//     icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavItem,
//     name: 'Typography',
//     to: '/theme/typography',
//     icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavTitle,
//     name: 'Components',
//   },
//   {
//     component: CNavGroup,
//     name: 'Base',
//     to: '/base',
//     icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
//     items: [
//       {
//         component: CNavItem,
//         name: 'Accordion',
//         to: '/base/accordion',
//       },
//       {
//         component: CNavItem,
//         name: 'Breadcrumb',
//         to: '/base/breadcrumbs',
//       },
//       {
//         component: CNavItem,
//         name: 'Cards',
//         to: '/base/cards',
//       },
//       {
//         component: CNavItem,
//         name: 'Carousel',
//         to: '/base/carousels',
//       },
//       {
//         component: CNavItem,
//         name: 'Collapse',
//         to: '/base/collapses',
//       },
//       {
//         component: CNavItem,
//         name: 'List group',
//         to: '/base/list-groups',
//       },
//       {
//         component: CNavItem,
//         name: 'Navs & Tabs',
//         to: '/base/navs',
//       },
//       {
//         component: CNavItem,
//         name: 'Pagination',
//         to: '/base/paginations',
//       },
//       {
//         component: CNavItem,
//         name: 'Placeholders',
//         to: '/base/placeholders',
//       },
//       {
//         component: CNavItem,
//         name: 'Popovers',
//         to: '/base/popovers',
//       },
//       {
//         component: CNavItem,
//         name: 'Progress',
//         to: '/base/progress',
//       },
//       {
//         component: CNavItem,
//         name: 'Spinners',
//         to: '/base/spinners',
//       },
//       {
//         component: CNavItem,
//         name: 'Tables',
//         to: '/base/tables',
//       },
//       {
//         component: CNavItem,
//         name: 'Tabs',
//         to: '/base/tabs',
//       },
//       {
//         component: CNavItem,
//         name: 'Tooltips',
//         to: '/base/tooltips',
//       },
//     ],
//   },
//   {
//     component: CNavGroup,
//     name: 'Buttons',
//     to: '/buttons',
//     icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
//     items: [
//       {
//         component: CNavItem,
//         name: 'Buttons',
//         to: '/buttons/buttons',
//       },
//       {
//         component: CNavItem,
//         name: 'Buttons groups',
//         to: '/buttons/button-groups',
//       },
//       {
//         component: CNavItem,
//         name: 'Dropdowns',
//         to: '/buttons/dropdowns',
//       },
//     ],
//   },
//   {
//     component: CNavGroup,
//     name: 'Forms',
//     icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
//     items: [
//       {
//         component: CNavItem,
//         name: 'Form Control',
//         to: '/forms/form-control',
//       },
//       {
//         component: CNavItem,
//         name: 'Select',
//         to: '/forms/select',
//       },
//       {
//         component: CNavItem,
//         name: 'Checks & Radios',
//         to: '/forms/checks-radios',
//       },
//       {
//         component: CNavItem,
//         name: 'Range',
//         to: '/forms/range',
//       },
//       {
//         component: CNavItem,
//         name: 'Input Group',
//         to: '/forms/input-group',
//       },
//       {
//         component: CNavItem,
//         name: 'Floating Labels',
//         to: '/forms/floating-labels',
//       },
//       {
//         component: CNavItem,
//         name: 'Layout',
//         to: '/forms/layout',
//       },
//       {
//         component: CNavItem,
//         name: 'Validation',
//         to: '/forms/validation',
//       },
//     ],
//   },
//   {
//     component: CNavItem,
//     name: 'Charts',
//     to: '/charts',
//     icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavGroup,
//     name: 'Icons',
//     icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
//     items: [
//       {
//         component: CNavItem,
//         name: 'CoreUI Free',
//         to: '/icons/coreui-icons',
//         badge: {
//           color: 'success',
//           text: 'NEW',
//         },
//       },
//       {
//         component: CNavItem,
//         name: 'CoreUI Flags',
//         to: '/icons/flags',
//       },
//       {
//         component: CNavItem,
//         name: 'CoreUI Brands',
//         to: '/icons/brands',
//       },
//     ],
//   },
//   {
//     component: CNavGroup,
//     name: 'Notifications',
//     icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
//     items: [
//       {
//         component: CNavItem,
//         name: 'Alerts',
//         to: '/notifications/alerts',
//       },
//       {
//         component: CNavItem,
//         name: 'Badges',
//         to: '/notifications/badges',
//       },
//       {
//         component: CNavItem,
//         name: 'Modal',
//         to: '/notifications/modals',
//       },
//       {
//         component: CNavItem,
//         name: 'Toasts',
//         to: '/notifications/toasts',
//       },
//     ],
//   },
//   {
//     component: CNavItem,
//     name: 'Widgets',
//     to: '/widgets',
//     icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
//     badge: {
//       color: 'info',
//       text: 'NEW',
//     },
//   },
//   {
//     component: CNavTitle,
//     name: 'Extras',
//   },
//   {
//     component: CNavGroup,
//     name: 'Pages',
//     icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
//     items: [
//       {
//         component: CNavItem,
//         name: 'Login',
//         to: '/login',
//       },
//       {
//         component: CNavItem,
//         name: 'Register',
//         to: '/register',
//       },
//       {
//         component: CNavItem,
//         name: 'Error 404',
//         to: '/404',
//       },
//       {
//         component: CNavItem,
//         name: 'Error 500',
//         to: '/500',
//       },
//     ],
//   },
//   {
//     component: CNavItem,
//     name: 'Docs',
//     href: 'https://coreui.io/react/docs/templates/installation/',
//     icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
//   },
// ]

// export default _nav
