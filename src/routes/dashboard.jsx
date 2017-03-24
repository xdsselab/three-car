import React, { PropTypes } from 'react'
import { connect } from 'dva'
import { Row, Col, Card } from 'antd'

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}

function Dashboard ({ dashboard, dispatch }) {
  return (
    <Row gutter={24}>
      <Col lg={18} md={24}>
        <Card bordered={false} bodyStyle={{
          padding: '24px 36px 24px 0',
        }}
        >
          Dashboard Card Example
        </Card>
      </Col>
    </Row>
  )
}

Dashboard.propTypes = {
  dashboard: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ dashboard }) => ({ dashboard }))(Dashboard)
