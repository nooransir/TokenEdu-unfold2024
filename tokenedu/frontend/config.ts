import Placeholder1 from "@/assets/placeholders/asset.png";

export const config: Config = {
  // Removing one or all of these socials will remove them from the page
  socials: {
    twitter: "https://twitter.com",
    discord: "https://discord.com",
    homepage: "#",
  },

  defaultAsset: {
    name: "TokenEDU",
    image: Placeholder1,
  },

  ourStory: {
    title: "TokenEDU",
    description: `This is the description`,
    discordLink: "https://discord.com",
  },
};

export interface Config {
  socials?: {
    twitter?: string;
    discord?: string;
    homepage?: string;
  };

  defaultAsset?: {
    name: string;
    image: string;
  };

  ourStory?: {
    title: string;
    subTitle?: string;
    description: string;
    discordLink: string;
  };
}
