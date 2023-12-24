import type { Meta, StoryObj } from '@storybook/react';

import MultiSelector from "./MultiSelector";

const meta = {
    title: 'Component/MultiSelector',
    tags: ['autodocs'],
    component: MultiSelector

} satisfies Meta<typeof MultiSelector>;

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        field: [],
        label: "MultiSelector",
        data: [
            {
                "name": "bulbasaur",
                "url": "https://pokeapi.co/api/v2/pokemon/1/"
            },
            {
                "name": "venusaur",
                "url": "https://pokeapi.co/api/v2/pokemon/3/"
            },
            {
                "name": "ivysaur",
                "url": "https://pokeapi.co/api/v2/pokemon/2/"
            },
            {
                "name": "charizard",
                "url": "https://pokeapi.co/api/v2/pokemon/6/"
            },
            {
                "name": "mddaerqw",
                "url": "https://pokeapi.co/api/v2/pokemon/6/"
            },
            {
                "name": "dfdfdd",
                "url": "https://pokeapi.co/api/v2/pokemon/6/"
            }
        ],
        error: false,
        limit: 4
    },
};

export const Width: Story = {
    args: {
        field: [],
        label: "MultiSelector",
        data: [
            {
                "name": "bulbasaur",
                "url": "https://pokeapi.co/api/v2/pokemon/1/"
            },
            {
                "name": "venusaur",
                "url": "https://pokeapi.co/api/v2/pokemon/3/"
            },
            {
                "name": "ivysaur",
                "url": "https://pokeapi.co/api/v2/pokemon/2/"
            },
            {
                "name": "charizard",
                "url": "https://pokeapi.co/api/v2/pokemon/6/"
            },
            {
                "name": "mddaerqw",
                "url": "https://pokeapi.co/api/v2/pokemon/6/"
            },
            {
                "name": "dfdfdd",
                "url": "https://pokeapi.co/api/v2/pokemon/6/"
            }
        ],
        error: false,
        limit: 4
    },
};

