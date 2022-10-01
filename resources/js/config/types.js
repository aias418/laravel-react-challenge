import moment from 'moment';
import { formatMoney } from './helpers';


export const reservationColumns = [
  {
    title: 'LISTING\'S NICKNAME',
    dataIndex: ['listing', 'nickname'],
    sorter: {
      compare: (a, b) => a.listing.nickname.localeCompare(b.listing.nickname),
      multiple: 18,
    },
    defaultSortOrder: 'ascend',
    render: (_, record) => record.listing.nickname,
    ellipsis: true,
  },
  {
    title: 'CHECK IN',
    dataIndex: 'checkIn',
    sorter: {
      compare: (a, b) => new Date(a.checkIn) - new Date(b.checkIn),
      multiple: 17,
    },
    render: (text) => moment(text,"YYYY-MM-DD").format("MM-DD"),
  },
  {
    title: 'CHECK OUT',
    dataIndex: 'checkOut',
    sorter: {
      compare: (a, b) => new Date(a.checkOut) - new Date(b.checkOut),
      multiple: 16,
    },
    render: (text) => moment(text,"YYYY-MM-DD").format("MM-DD"),
  },
  {
    title: 'NIGHTS',
    dataIndex: 'nightsCount',
    sorter: {
      compare: (a, b) => a.nightsCount - b.ightsCount,
      multiple: 15,
    },
  },
  {
    title: 'GUEST\'S NAME',
    dataIndex: ['guest', 'fullName'],
    sorter: {
      compare: (a, b) => a.guest.fullName.localeCompare(b.guest.fullName),
      multiple: 14,
    },
    render: (_, record) => record.guest.fullName,
    ellipsis: true,
  },
  {
    title: 'SOURCE',
    dataIndex: 'source',
    sorter: {
      compare: (a, b) => a.source - b.source,
      multiple: 13,
    },
  },
  {
    title: 'CREATION DATE',
    dataIndex: 'createdAt',
    sorter: {
      compare: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
      multiple: 12,
    },
    render: (text) => moment(text,"YYYY-MM-DD").format("MM-DD"),
  },
  {
    title: 'NET INCOME',
    dataIndex: ['money', 'netIncome'],
    sorter: {
      compare: (a, b) => a.money.netIncome - b.money.netIncome,
      multiple: 11,
    },
    render: (_, record) => record.money.netIncome ? formatMoney(record.money.netIncome) : '',
  },
  {
    title: 'CONF DATE',
    dataIndex: 'confirmedAt',
    sorter: {
      compare: (a, b) => new Date(a.confirmedAt) - new Date(b.confirmedAt),
      multiple: 10,
    },
    render: (text) => text ? moment(text,"YYYY-MM-DD").format("MM-DD") : '',
  },
  {
    title: 'ACCOMM FARE',
    dataIndex: ['money', 'fareAccommodation'],
    sorter: {
      compare: (a, b) => a.money.fareAccommodation - b.money.fareAccommodation,
      multiple: 9,
    },
    render: (_, record) => record.money.fareAccommodation ? formatMoney(record.money.fareAccommodation) : '',
  },
  {
    title: 'CLEAN FARE',
    dataIndex: ['money', 'fareCleaning'],
    sorter: {
      compare: (a, b) => a.money.fareCleaning - b.money.fareCleaning,
      multiple: 8,
    },
    render: (_, record) => record.money.fareCleaning ? formatMoney(record.money.fareCleaning) : '',
  },
  {
    title: 'TAX',
    dataIndex: ['money', 'totalTaxes'],
    sorter: {
      compare: (a, b) => a.money.totalTaxes - b.money.totalTaxes,
      multiple: 7,
    },
    render: (_, record) => record.money.totalTaxes ? formatMoney(record.money.totalTaxes) : '',
  },
  {
    title: 'ADJ',
    dataIndex: ['money', 'fareAccommodationAdjusted'],
    sorter: {
      compare: (a, b) => a.money.fareAccommodationAdjusted - b.money.fareAccommodationAdjusted,
      multiple: 6,
    },
    render: (_, record) => record.money.fareAccommodationAdjusted ? formatMoney(record.money.fareAccommodationAdjusted) : '',
  },
  {
    title: 'DISC',
    dataIndex: ['money', 'fareAccommodationDiscount'],
    sorter: {
      compare: (a, b) => a.money.fareAccommodationDiscount - b.money.fareAccommodationDiscount,
      multiple: 5,
    },
    render: (_, record) => record.money.fareAccommodationDiscount ? formatMoney(record.money.fareAccommodationDiscount) : '',
  },
  {
    title: 'CNCL FEE',
    dataIndex: ['money', 'commission'],
    sorter: {
      compare: (a, b) => a.money.commission - b.money.commission,
      multiple: 4,
    },
    render: (_, record) => record.money.commission ? formatMoney(record.money.commission) : '',
  },
  {
    title: 'HOST FEE',
    dataIndex: ['money', 'hostServiceFee'],
    sorter: {
      compare: (a, b) => a.money.hostServiceFee - b.money.hostServiceFee,
      multiple: 3,
    },
    render: (_, record) => record.money.hostServiceFee ? formatMoney(record.money.hostServiceFee) : '',
  },
  {
    title: 'BALANCE DUE',
    dataIndex: ['money', 'balanceDue'],
    sorter: {
      compare: (a, b) => a.money.balanceDue - b.money.balanceDue,
      multiple: 2,
    },
    render: (_, record) => record.money.balanceDue ? formatMoney(record.money.balanceDue) : '',
  },
  {
    title: 'TOTAL PAID',
    dataIndex: ['money', 'totalPaid'],
    sorter: {
      compare: (a, b) => a.money.totalPaid - b.money.totalPaid,
      multiple: 1,
    },
    render: (_, record) => record.money.totalPaid ? formatMoney(record.money.totalPaid) : '',
  },
];