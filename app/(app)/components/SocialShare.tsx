"use client";

import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

type Props = {
  baseUrl: string;
  type: "blog" | "servicos";
  message: string;
  slug: string;
};

function SocialShare({ baseUrl, type, message, slug }: Props) {
  return (
    <div className="flex justify-end gap-2 p-4">
      <FacebookShareButton
        url={`${baseUrl}/${type}/${slug}`}
        quote={message}
        hashtag={"#adify"}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <WhatsappShareButton
        url={`${baseUrl}/${type}/${slug}`}
        title={message}
        separator=":: "
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton url={`${baseUrl}/${type}/${slug}`}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  );
}

export default SocialShare;
