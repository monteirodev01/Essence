import React, { useRef, useState, useEffect } from "react";
import css from "./CustomSelect.module.css";
import teste from '../../assets/icons/filter.svg'

type Option = {
  label: string;
  value: string;
};

type CustomSelectProps = {
  options: Option[];
  placeholder?: string;
  onChange?: (value: string) => void;
};

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  placeholder = "Filtrar por:",
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const handleSelect = (option: Option) => {
    setSelected(option);
    setIsOpen(false);
    onChange?.(option.value);
  };

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={css.customSelect} ref={ref}>
      
      <div
        className={`${css.selectBox} ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
      <img src={teste} alt="" />
        {selected ? (
          selected.label
        ) : (
          <span className={css.placeholder}>{placeholder}</span>
        )}
        <span className={css.arrow}>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <ul className={css.selectOptions}>
          {options.map((option) => (
            <li
              key={option.value}
              className={`${css.option} ${
                selected?.value === option.value ? "selected" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
