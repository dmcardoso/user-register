export type SelectValues =
    | null
    | object
    | {
          label: string;
          value: string;
      };

export default function (
    options: Array<object>,
    index: string,
    value: string
): Array<SelectValues> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return options.map((option: any) => {
        return {
            label: option[index],
            value: option[value],
        };
    });
}
