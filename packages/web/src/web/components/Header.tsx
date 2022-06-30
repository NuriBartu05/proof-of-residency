import {
  Box,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  useBreakpointValue
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';
import { FaBars, FaLocationArrow, FaQuestion, FaSearch } from 'react-icons/fa';
import { ProofOfResidencyNetwork } from 'src/contracts';
import useSWR from 'swr';
import { GetTokensForOwnerResponse } from 'types';
import { chainId, useNetwork } from 'wagmi';

import Logo from '../../../public/logo.svg';
import { axiosClient } from '../axios';
import { useHasCommitment, useWalletAddress } from '../hooks';
import { CustomConnectButton } from './CustomConnectButton';

const Header = () => {
  const isMobile = useBreakpointValue({ base: true, md: false }, 'sm');

  const [token, setToken] = useState<{
    chain: ProofOfResidencyNetwork;
    id: string;
  } | null>();

  const walletAddress = useWalletAddress();
  const { chain } = useNetwork();

  const hasCommitment = useHasCommitment();

  const verbiage = useMemo(
    () => (token?.id ? 'token' : hasCommitment ? 'claim' : 'request'),
    [token, hasCommitment]
  );
  const actionLink = useMemo(
    () =>
      verbiage === 'claim'
        ? '/mint'
        : verbiage === 'token' && token?.id && token?.chain
        ? `/token/${token.chain}/${token.id}`
        : `/request`,
    [verbiage]
  );

  const { data } = useSWR<GetTokensForOwnerResponse>(`/tokens/${walletAddress}`);

  useEffect(() => {
    if (data?.l1) {
      return setToken({ chain: chainId.mainnet, id: data.l1 });
    } else if (data?.arbitrum) {
      return setToken({ chain: chainId.arbitrum, id: data.arbitrum });
    } else if (data?.optimism) {
      return setToken({ chain: chainId.optimism, id: data.optimism });
    } else if (data?.polygon) {
      return setToken({ chain: chainId.polygon, id: data.polygon });
    }
  }, [data]);

  return (
    <Flex height="70px" position="absolute" left={0} top={0} right={0} px={4} shadow="sm">
      <Flex mx="auto" align="center" width="100%" maxWidth={1200}>
        <Box cursor="pointer">
          <Link href="/" passHref>
            <Flex align="center" minW="48px" minH="48px">
              <Image src={Logo} alt="Proof of residency logo" width={48} height={48} />
            </Flex>
          </Link>
        </Box>
        {!isMobile && (
          <Flex align="center" ml={4}>
            <Link href="/explore" passHref>
              <Button ml={2} variant="ghost">
                explore
              </Button>
            </Link>
            <Link href="/faq" passHref>
              <Button ml={2} variant="ghost">
                faq
              </Button>
            </Link>
          </Flex>
        )}
        <Spacer />
        <Flex align="center" ml={{ base: 3, sm: 1 }}>
          {walletAddress && !chain?.unsupported && !isMobile && (
            <Link href={actionLink} passHref>
              <Button isLoading={hasCommitment === null} mr={3} variant="solid">
                {verbiage}
              </Button>
            </Link>
          )}

          <CustomConnectButton />

          {isMobile && (
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<FaBars />}
                variant="outline"
                ml={3}
              />
              <MenuList bgColor="black">
                <Link href={actionLink} passHref>
                  <MenuItem icon={<FaLocationArrow />}>{verbiage}</MenuItem>
                </Link>
                <Link href="/explore" passHref>
                  <MenuItem icon={<FaSearch />}>explore</MenuItem>
                </Link>
                <Link href="/faq" passHref>
                  <MenuItem icon={<FaQuestion />}>faq</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
