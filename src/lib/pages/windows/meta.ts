import type { Metadata } from 'next';

import type { WindowsPropsType } from '../../../../type/PropsType';
import { getWindowBySlug } from '~/lib/services/content/windows';

export const generateMetadata = ({
  params,
}: WindowsPropsType): Metadata | undefined => {
  const windowData = getWindowBySlug(params.id);
  const baseUrl = 'https://svs-windows.vercel.app/';
  if (!windowData) {
    return undefined;
  }

  const pageUrl = `${baseUrl}/windows/${windowData.slug}`;
  return {
    title: `SVS Windows & Door | ${windowData.name}`,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${windowData.name}`,
      images: {
        url: `https://svs-windows.vercel.app/${windowData.showcaseImage}`,
        alt: `${windowData.description} og image`,
      },
    },
  };
};
