
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";

function Teams() {
  return (
    <>
      <div className="content">
      <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-laptop  text-warning" />
                    </div>
                  </Col>
                  
                  <Col md="8" xs="7">
                  <a href="CollegeTeam">
                    <div className="numbers">
                      <p className="card-category">College and Career Readiness</p>
                      <p />
                    </div>
                    </a>
                  </Col>
                 
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <a href="CollegeTeam">
                <div className="stats">
                  <i className="fas fa-info-circle" /> Learn More
                </div>
                </a>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe-2 text-success" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                  <a href="Civic">
                    <div className="numbers">
                      <p className="card-category">Civic and Community Engagement
                    </p>
                      <p />
                    </div>
                    </a>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-info-circle" /> Learn More
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-delivery-fast text-danger" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Crisis Care</p>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-info-circle" /> Learn More
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-ruler-pencil text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Educational Support</p>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-info-circle" /> Learn More
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28  text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Family needs</p>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-info-circle" /> Learn More
                </div>
              </CardFooter>
            </Card>
            </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-support-17 text-danger" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Mental Health and Wellness</p>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-info-circle" /> Learn More
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-glasses-2 text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Senior and Disability Support</p>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-info-circle" /> Learn More
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="4">
          </Col>
          <Col md="8">
            <Card className="card-chart">
            </Card>
          </Col>
        </Row>
        <Row>
        <Col md="12">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">Resources</CardTitle>
                <p className="card-category">
                </p>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>City</th>
                      <th>Resource</th>
                      <th className="text-right">Phone Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>MCCT</td>
                      <td>Marin City</td>
                      <td>Medical</td>
                      <td className="text-right">555-555-5555</td>
                    </tr>
                    <tr>
                      <td>MCCT</td>
                      <td>Marin City</td>
                      <td>Rental Assistance</td>
                      <td className="text-right">555-555-5555</td>
                    </tr>
                    <tr>
                      <td>MCCT</td>
                      <td>Sausalito</td>
                      <td>Food</td>
                      <td className="text-right">555-555-5555</td>
                    </tr>
                    <tr>
                      <td>MCCT</td>
                      <td>Sausalito</td>
                      <td>Advice</td>
                      <td className="text-right">555-555-5555</td>
                    </tr>
                    <tr>
                      <td>MCCT</td>
                      <td>Sausalito</td>
                      <td>transport</td>
                      <td className="text-right">555-555-5555</td>
                    </tr>
                    <tr>
                      <td>MCCT</td>
                      <td>San Rafael</td>
                      <td>Jobs</td>
                      <td className="text-right">555-555-5555</td>
                    </tr>
                    <tr>
                      <td>MCCT</td>
                      <td>San Rafael</td>
                      <td>Legal</td>
                      <td className="text-right">555-555-5555</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          </Row>
      </div>
    </>
  );
}

export default Teams;
