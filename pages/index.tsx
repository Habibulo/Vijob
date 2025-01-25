import { NextPage } from 'next';
import HomePage from './home/homepage';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from '@/libs/components/Language/LangSwitcher';
import { useState } from 'react';
// export const getStaticProps = async ({ locale }: any) => ({ props: { ...(await serverSideTranslations(locale, ['common'])), }, });

const Home: NextPage = () => {


  return (
    <div className="max-w-[470px] w-full mx-auto">
      <HomePage content={''} />
    </div>
  );
};

export default Home;