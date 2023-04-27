import { Meta, StoryObj } from "@storybook/react";

import { PrimaryButton } from "@/features/calculator/components/presentational/buttons/PrimaryButton";
import { IconNumber1, IconPlus, IconPlusMinus } from "@tabler/icons-react";
import { DecimalPoint } from "@/features/calculator/components/presentational/elements/DecimalPoint";

export default {
  title: "features/calculator/presentational/buttons/PrimaryButton",
  component: PrimaryButton,
} satisfies Meta<typeof PrimaryButton>;

type Story = StoryObj<typeof PrimaryButton>;

export const Orange: Story = {
  args: {
    children: <IconPlus color="white" />,
    bgColor: "bg-orange-500",
  },
};

export const Gray: Story = {
  args: {
    children: <IconNumber1 color="white" />,
    bgColor: "bg-gray-700",
  },
};

export const Gray2: Story = {
  args: {
    children: <DecimalPoint />,
    bgColor: "bg-gray-700",
  },
};

export const LightGray: Story = {
  args: {
    children: <IconPlusMinus color="black" />,
    bgColor: "bg-gray-300",
  },
};
