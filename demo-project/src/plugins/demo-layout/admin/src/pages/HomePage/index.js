/*
 *
 * HomePage
 *
 */

import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types';
// import pluginId from "../../pluginId";

import styled from "styled-components";
import { Flex } from "@strapi/design-system/Flex";
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

import More from "@strapi/icons/More";

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
`;

const HomePage = () => {
  return (
    <Div>
      <Stack size={6}>
        <Flex class justifyContent="space-between">
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
      </Stack>
    </Div>
  );
};

export default HomePage;
