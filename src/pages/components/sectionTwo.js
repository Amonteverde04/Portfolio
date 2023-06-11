import { COMPANY_NAME, COMPANY_LINK, JOB_TITLE, JOB_START } from '@/lib/globals';
import GridComponent from './gridComponent';
import Link from 'next/link';
import { Stack, Heading, Text, GridItem } from '@chakra-ui/react';
import styles from '@/styles/Home.module.css'

export default function SectionTwo() {
  const calcMonthsWorked = () => {
    return JOB_START.fromNow(true);
  }

  return (
      <>
          <Text><b>A LITTLE BIT ABOUT ME</b></Text>
          <GridComponent columns={2}>
            <GridItem w='100%' h='100%'>
              <Stack>
                <Heading>What do I do?</Heading>
                <Text fontSize={"1.25rem"}>I am a remote {JOB_TITLE} at <Link className={styles.gradientUnderline} href={COMPANY_LINK} rel="noopener" target='_blank'><span className={styles.gradientSpan}>{COMPANY_NAME}</span></Link>.</Text>
              </Stack>
            </GridItem>
            <GridItem w='100%' h='100%'>
              <Stack>
                <Heading>For how long?</Heading>
                <Text fontSize={"1.25rem"}>I am proud to say that I have been a {JOB_TITLE} for <b>{calcMonthsWorked()}</b>.</Text>
              </Stack>
            </GridItem>
            <GridItem w='100%' h='100%'>
              <Stack>
                <Heading>What are my current goals?</Heading>
                <Text fontSize={"1.25rem"}>I am looking to learn as much as I can, while making an impact on the world. Even if it&apos;s a small impact!</Text>
              </Stack>
            </GridItem>
            <GridItem w='100%' h='100%'>
              <Stack>
                <Heading>Who am I outside of work?</Heading>
                <Text fontSize={"1.25rem"}>I am a devoted fiancé and dog dad! I love to be creative and watch my ideas come to life. In my free time you can typically find me programming, making music, playing video games or spending time with my family.</Text>
              </Stack>
            </GridItem>
          </GridComponent>
      </>
  )
}