/*
 *
 * HomePage
 *
 */

import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types';
// import pluginId from "../../pluginId";

import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import { Flex } from "@strapi/design-system/Flex";
import { Box } from "@strapi/design-system/Box";
import { Stack } from "@strapi/design-system/Stack";
import {
  Card,
  CardHeader,
  CardBody,
  CardCheckbox,
  CardAction,
  CardAsset,
  CardTimer,
  CardContent,
  CardBadge,
  CardTitle,
  CardSubtitle,
} from "@strapi/design-system/Card";
import { IconButton, IconButtonGroup } from "@strapi/design-system/IconButton";
import { Typography } from "@strapi/design-system/Typography";
import { Divider } from "@strapi/design-system/Divider";
import ProgressBar from "react-bootstrap/ProgressBar";

import More from "@strapi/icons/More";

import facebookLogo from "../../assets/facebook-logo.png";
import twitterLogo from "../../assets/twitter-logo.png";
import linkedInLogo from "../../assets/linked-in-logo.png";

import "bootstrap/dist/css/bootstrap.css";

const Div = styled.div`
  padding: 4rem;

  .card {
    border-radius: 8px;
  }

  .bg-card-blue {
    background: #321fdb;
  }

  .bg-card-cyan {
    background: #39f;
  }

  .bg-card-yellow {
    background: #f9b115;
  }

  .bg-card-red {
    background: #e55353;
  }

  .font-white {
    color: #ffffff;
  }

  .text-bold {
    font-weight: bold;
  }

  .progress-h {
    height: 0.5rem;
  }

  .progress-bg-blue {
    background: #321fdb;
  }

  .divider-h {
    margin-top: 4rem;
    background: gray;
    height: 0.2rem;
  }

  .bg-facebook {
    border-radius: 8px 8px 0 0;
    background: #0d6efd;
    height: 50%;
  }

  .bg-twitter {
    border-radius: 8px 8px 0 0;
    height: 50%;
    background: #0dcaf0;
  }

  .bg-link-in {
    border-radius: 8px 8px 0 0;
    height: 50%;
    background: #39f;
  }

  .logo {
    width: 5rem;
    height: 5rem;
  }

  .card-content-log {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .space-t {
    margin: 0 2rem 0 2rem;
  }

  .divider-ct {
    width: 0.15rem;
    height: 5rem;
    background: grey;
  }
`;

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.register(ArcElement, Tooltip, Legend);

const HomePage = () => {
  const options = {
    responsive: true,
    // maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Demo Chart",
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => Math.random() * (1000 + 1000) - 1000),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => Math.random() * (1000 + 1000) - 1000),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const options2 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Demo Chart 2",
      },
    },
  };
  const labels2 = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data2 = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels2.map(() => Math.random() * (1000 - 0) + 0),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels2.map(() => Math.random() * (1000 - 0) + 0),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const data3 = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Div>
      <Stack size={5}>
        <Flex justifyContent="space-between">
          <Card
            style={{
              width: "350px",
              height: "200px",
            }}
            id="first"
            className="card bg-card-blue"
          >
            <CardHeader>
              <CardAction position="end">
                <IconButton label="Edit the thing" icon={<More />} />
              </CardAction>
            </CardHeader>
            <CardBody>
              <CardContent>
                <Stack size={2}>
                  <Typography variant="alpha" className="font-white">
                    26K (-12.4%)
                  </Typography>
                  <Typography variant="beta" className="font-white">
                    Users
                  </Typography>
                </Stack>
              </CardContent>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "350px",
              height: "200px",
            }}
            id="first"
            className="card bg-card-cyan"
          >
            <CardHeader>
              <CardAction position="end">
                <IconButton label="Edit the thing" icon={<More />} />
              </CardAction>
            </CardHeader>
            <CardBody>
              <CardContent>
                <Stack size={2}>
                  <Typography variant="alpha" className="font-white">
                    $6.2000 (40.9%)
                  </Typography>
                  <Typography variant="beta" className="font-white">
                    Income
                  </Typography>
                </Stack>
              </CardContent>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "350px",
              height: "200px",
            }}
            id="first"
            className="card bg-card-yellow"
          >
            <CardHeader>
              <CardAction position="end">
                <IconButton label="Edit the thing" icon={<More />} />
              </CardAction>
            </CardHeader>
            <CardBody>
              <CardContent>
                <Stack size={2}>
                  <Typography variant="alpha" className="font-white">
                    2.49% (84.7%)
                  </Typography>
                  <Typography variant="beta" className="font-white">
                    Conversion Rate
                  </Typography>
                </Stack>
              </CardContent>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "350px",
              height: "200px",
            }}
            id="first"
            className="card bg-card-red"
          >
            <CardHeader>
              <CardAction position="end">
                <IconButton label="Edit the thing" icon={<More />} />
              </CardAction>
            </CardHeader>
            <CardBody>
              <CardContent>
                <Stack size={2}>
                  <Typography variant="alpha" className="font-white">
                    44K (-23.6%)
                  </Typography>
                  <Typography variant="beta" className="font-white">
                    Sessions
                  </Typography>
                </Stack>
              </CardContent>
            </CardBody>
          </Card>
        </Flex>

        <Card
          style={{
            width: "100%",
          }}
          id="first"
          className="card"
        >
          <CardBody>
            <CardContent>
              <Stack size={10}>
                <Line width={1500} height={600} options={options} data={data} />
                <Bar options={options2} data={data2} />
                <Doughnut height={300} data={data3} />
                <Divider className="divider-h" />
                <Flex justifyContent="space-between">
                  <Stack size={5}>
                    <div className="text-center">Visits</div>
                    <div className="text-center text-bold">
                      29.703 Users (40%)
                    </div>
                    <ProgressBar
                      className="progress-h"
                      variant="success"
                      now={40}
                    />
                  </Stack>
                  <Stack size={5}>
                    <div className="text-center">Unique</div>
                    <div className="text-center text-bold">
                      24.093 Users (20%)
                    </div>
                    <ProgressBar
                      className="progress-h"
                      variant="info"
                      now={20}
                    />
                  </Stack>
                  <Stack size={5}>
                    <div className="text-center">Pageviews</div>
                    <div className="text-center text-bold">
                      78.706 Views (60%)
                    </div>
                    <ProgressBar
                      className="progress-h"
                      variant="warning"
                      now={60}
                    />
                  </Stack>
                  <Stack size={5}>
                    <div className="text-center">New Users</div>
                    <div className="text-center text-bold">
                      22.123 Users (80%)
                    </div>
                    <ProgressBar
                      className="progress-h"
                      variant="danger"
                      now={80}
                    />
                  </Stack>
                  <Stack size={5}>
                    <div className="text-center">Bounce Rate</div>
                    <div className="text-center text-bold">40.15%</div>
                    <ProgressBar
                      className="progress-h"
                      variant="primary"
                      now={40.15}
                    />
                  </Stack>
                </Flex>
              </Stack>
            </CardContent>
          </CardBody>
        </Card>

        <Flex justifyContent="space-between">
          <Card
            style={{
              width: "400px",
              height: "240px",
            }}
            id="first"
            className="card"
          >
            <div className="d-flex justify-content-center align-items-center bg-facebook">
              <img className="logo" src={facebookLogo} />
            </div>
            <CardBody>
              <CardContent>
                <div className="card-content-log">
                  <div className="space-t text-center text-bold">
                    89K Friends
                  </div>
                  <div className="space-t divider-ct"></div>
                  <div className="text-center text-bold">459 Feeds</div>
                </div>
              </CardContent>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "400px",
              height: "240px",
            }}
            id="first"
            className="card"
          >
            <div className="d-flex justify-content-center align-items-center bg-twitter">
              <img className="logo" src={twitterLogo} />
            </div>
            <CardBody>
              <CardContent>
                <div className="card-content-log">
                  <div className="space-t text-center text-bold">
                    89K Friends
                  </div>
                  <div className="space-t divider-ct"></div>
                  <div className="text-center text-bold">459 Feeds</div>
                </div>
              </CardContent>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "400px",
              height: "240px",
            }}
            id="first"
            className="card"
          >
            <div className="d-flex justify-content-center align-items-center bg-link-in">
              <img className="logo" src={linkedInLogo} />
            </div>
            <CardBody>
              <CardContent>
                <div className="card-content-log">
                  <div className="space-t text-center text-bold">
                    89K Friends
                  </div>
                  <div className="space-t divider-ct"></div>
                  <div className="text-center text-bold">459 Feeds</div>
                </div>
              </CardContent>
            </CardBody>
          </Card>
        </Flex>
      </Stack>
    </Div>
  );
};

export default HomePage;
