type PartialInputProps = Pick<
  React.ComponentPropsWithoutRef<"input">,
  "className" | "style"
>;

type Props = {
  value: string;
  onChange(value: string): void;
  /**
   * Number of characters/input for this component
   */
  size?: number;
  /**
   * Validation pattern for each input.
   * e.g: /[0-9]{1}/ for digits only or /[0-9a-zA-Z]{1}/ for alphanumeric
   */
  validationPattern?: RegExp;
} & PartialInputProps;
// components/OtpInput.tsx

const OtpInput = (props: Props) => {
  const {
    //Set the default size to 6 characters
    size = 6,
    //Default validation is digits
    validationPattern = /[0-9]{1}/,
    value,
    onChange,
    className,
    ...restProps
  } = props;
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const elem = e.target;
    const val = e.target.value;
    // check if the value is valid
    if (!validationPattern.test(val) && val !== "") return;

    // change the value of the upper state using onChange
    const valueArr = value.split("");
    valueArr[index] = val;
    const newVal = valueArr.join("").slice(0, 6);
    onChange(newVal);

    //focus the next element if there's a value
    if (val) {
      const next = elem.nextElementSibling as HTMLInputElement | null;
      next?.focus();
    }
  };

  // Create an array based on the size.
  const arr = new Array(size).fill("-");
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const current = e.currentTarget;
    if (e.key === "ArrowLeft" || e.key === "Backspace") {
      const prev = current.previousElementSibling as HTMLInputElement | null;
      prev?.focus();
      prev?.setSelectionRange(0, 1);
      return;
    }

    if (e.key === "ArrowRight") {
      const prev = current.nextSibling as HTMLInputElement | null;
      prev?.focus();
      prev?.setSelectionRange(0, 1);
      return;
    }
  };
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const val = e.clipboardData.getData("text").substring(0, size);
    onChange(val);
  };
  return (
    <div className="flex gap-2">
      {/* Map through the array and render input components */}
      {arr.map((_, index) => {
        return (
          <input
            key={index}
            {...restProps}
            /**
             * Add some styling to the input using daisyUI + tailwind.
             * Allows the user to override the classname for a different styling
             */
            className={
              className ||
              `input input-bordered px-0 
              w-10 h:14 md:w-14 md:h-16 
              text-xl md:text-3xl text-center`
            }
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            pattern={validationPattern.source}
            maxLength={6}
            value={value.at(index) ?? ""}
            onChange={(e) => handleInputChange(e, index)}
            onKeyUp={handleKeyUp}
            onPaste={handlePaste}
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
