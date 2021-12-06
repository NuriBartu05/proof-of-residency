import { Divider, Flex, Link, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import { FaDiscord, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <Flex direction="column" mt={12} height="70px" px={4} shadow="sm">
      <Divider />
      <Flex mt={4} align="center" mx="auto" width="100%" maxWidth={1200}>
        <Text mr={4} size="md">
          Copyright © 2021 by Inclined Finance, Inc. All rights reserved.
        </Text>
        <Spacer />
        {/* <Link mr={3} isExternal href="https://discord.gg/hhQfHqGTPk">
          <FaTwitter size={30} />
        </Link>
        <Link mr={3} isExternal href="https://discord.gg/hhQfHqGTPk">
          <FaInstagram size={30} />
        </Link> */}
        <Link
          aria-label="Check out the github code"
          mr={3}
          isExternal
          href="https://github.com/proof-of-residency"
        >
          <FaGithub size={30} />
        </Link>

        <Link aria-label="Join the discord server" isExternal href="https://discord.gg/hhQfHqGTPk">
          <FaDiscord size={30} />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
