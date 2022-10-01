import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, DatePicker, Row, Col, Space, Typography } from 'antd';
import { DownloadOutlined, SettingOutlined } from "@ant-design/icons";
import { Excel } from "antd-table-saveas-excel";
import actions from '../redux/Reservation/actions';
import { formatMoney } from '../config/helpers';
import { reservationColumns as columns } from '../config/types';
import moment from 'moment';

const { Text, Title } = Typography;

function Dashboard() {
  const [reservations, setReservations] = useState([]);
  const [totalAerie, setTotalAerie] = useState(0);
  const [totalNonAirbnb, setTotalNonAirbnb] = useState(0);
  const [total20260, setTotal20260] = useState(0);
  const [total304, setTotal304] = useState(0);
  const [salesTax, setSalesTax] = useState(0);
  const [surtax, setSurtax] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  
  const reservationList = useSelector(state => state.reservationReducer.reservations);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: actions.GET_RESERVATIONS,
      payload: null,
    });
  }, []);

  useEffect(() => {
    handleSearch(new Date(), moment(new Date()).format("YYYY-MM"),);
  }, [reservationList]);

  const handleSearch = (date, dateString) => {
    let arr = reservationList;
    let subtotalAerie = 0;
    let subtotal20260 = 0;
    let subtotal304 = 0;
    let subtotalAll = 0;
    let subtotalNonAirbnb = 0;
    let aerieSalesTax = 0;
    let aerieSurtax = 0;
    if (dateString !== '')
      arr = arr.filter((el) => el.checkIn.includes(dateString) || el.checkOut.includes(dateString));
    
    arr = arr.map( el => {
      subtotalAll += el.money.netIncome;
      if (el.listing.nickname.includes('Aerie')){
        subtotalAerie += el.money.netIncome;
        if (!el.source.includes('airbnb'))
          subtotalNonAirbnb += el.money.netIncome;
      }
      if (el.listing.nickname.includes('20260'))
        subtotal20260 += el.money.netIncome;
      if (el.listing.nickname.includes('304'))
        subtotal304 += el.money.netIncome;
      if (el.listing.nickname.includes('304'))
        subtotal304 += el.money.netIncome;
      return { ...el, key: el.id}
    });
    aerieSalesTax = subtotalNonAirbnb * .07;
    aerieSurtax = subtotalNonAirbnb * .01;

    setReservations(arr);
    
    setTotalAerie(subtotalAerie);
    setTotal20260(subtotal20260);
    setTotal304(subtotal304);
    setGrandTotal(subtotalAll);
    setTotalNonAirbnb(subtotalNonAirbnb);
    setSalesTax(aerieSalesTax);
    setSurtax(aerieSurtax);
  };

  
  const handleChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const handleDownload = () => {
    const excel = new Excel();
    excel
      .addSheet("reservations")
      .addColumns(columns)
      .addDataSource(reservations, {
        str2Percent: true
      })
      .saveAs("Reservations.xlsx");
  };

  const handleSetting = () => {
    alert('coming soon!');
    return;
  };

  console.log(reservations);

  return (
    <div className="dashboard">
      <div className="filter-section">
        <label>Filter</label>
        <DatePicker onChange={handleSearch} picker="month" defaultValue={moment(new Date())} />
        <Button
          icon={<DownloadOutlined />}
          onClick={handleDownload}
        />
        <Button
          icon={<SettingOutlined />}
          onClick={handleSetting}
        />
      </div>
      <Table 
        columns={columns} 
        dataSource={reservations} 
        onChange={handleChange} 
        pagination={false}
        size="middle"
        summary={(pageData) => {
          let totalNetIncome = 0;
          let totalAccommFare = 0;
          let totalCleanFare = 0;
          let totalTax = 0;
          let totalAdj = 0;
          let totalDisc = 0;
          let totalHostFee = 0;
          let totalBalanceDue = 0;
          let totalPaid = 0;
          pageData.forEach(({ money }) => {
            totalNetIncome += money.netIncome;
            totalAccommFare += money.fareAccommodation;
            totalCleanFare += money.fareCleaning;
            totalTax += money.totalTaxes
            totalAdj += money.fareAccommodationAdjusted;
            totalDisc += money.fareAccommodationDiscount;
            totalHostFee += money.hostServiceFee;
            totalBalanceDue += money.balanceDue;
            totalPaid += money.totalPaid;

          });
          return (
            <Table.Summary fixed>
              <Table.Summary.Row>
                <Table.Summary.Cell colSpan={7} />
                <Table.Summary.Cell>
                  {formatMoney(totalNetIncome)}
                </Table.Summary.Cell>
                <Table.Summary.Cell />
                <Table.Summary.Cell>
                  {formatMoney(totalAccommFare)}
                </Table.Summary.Cell>
                <Table.Summary.Cell>
                  {formatMoney(totalCleanFare)}
                </Table.Summary.Cell>
                <Table.Summary.Cell>  
                  {formatMoney(totalTax)}
                </Table.Summary.Cell>
                <Table.Summary.Cell>
                  {formatMoney(totalAdj)}
                </Table.Summary.Cell>
                <Table.Summary.Cell>
                  {formatMoney(totalDisc)}
                </Table.Summary.Cell>
                <Table.Summary.Cell />
                <Table.Summary.Cell>
                  {formatMoney(totalHostFee)}
                </Table.Summary.Cell>
                <Table.Summary.Cell>
                  {formatMoney(totalBalanceDue)}
                </Table.Summary.Cell>
                <Table.Summary.Cell>
                  {formatMoney(totalPaid)}
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          );
        }}
        scroll={{
          y: 400,
        }}
      />
      <Row style={{marginTop: '20px'}}>
        <Col sm={12} xs={24}>
          <Space direction="vertical">
            <Text type="secondary">Subtotal Aerie</Text>
            <Title level={4}>{formatMoney(totalAerie)}</Title>
          </Space>
        </Col>
        <Col sm={12} xs={24}>
          <Space direction="vertical">
            <Text type="secondary">Aerie (non Airbnb revenue)</Text>
            <Title level={4}>{formatMoney(totalNonAirbnb)}</Title>
          </Space>
        </Col>
        <Col sm={12} xs={24}>
          <Space direction="vertical">
            <Text type="secondary">Subtotal 20260</Text>
            <Title level={4}>{formatMoney(total20260)}</Title>
          </Space>
        </Col>
        <Col sm={12} xs={24}>
          <Space direction="vertical">
            <Text type="secondary">Aerie Sales Tax</Text>
            <Title level={4}>{formatMoney(salesTax)}</Title>
          </Space>
        </Col>
        <Col sm={12} xs={24}>
          <Space direction="vertical">
            <Text type="secondary">Subtotal 304</Text>
            <Title level={4}>{formatMoney(total304)}</Title>
          </Space>
        </Col>
        <Col sm={12} xs={24}>
          <Space direction="vertical">
            <Text type="secondary">Aerie Surtax</Text>
            <Title level={4}>{formatMoney(surtax)}</Title>
          </Space>
        </Col>
        <Col sm={12} xs={24}>
          <Space direction="vertical">
            <Text type="secondary">Total</Text>
            <Title level={4}>{formatMoney(grandTotal)}</Title>
          </Space>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
