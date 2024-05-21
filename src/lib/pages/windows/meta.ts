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
    title: windowData.name,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${windowData.name} | sozonome`,
      images: {
        url: windowData.showcaseImage,
        alt: `${windowData.description} og image`,
      },
    },
  };
};
