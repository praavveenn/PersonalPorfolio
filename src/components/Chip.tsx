import styles from './Chip.module.scss';

interface ChipListProps {
  items: string[];
  label: string;
}

export function ChipList({ items, label }: ChipListProps) {
  return (
    <ul className={styles.list} aria-label={label}>
      {items.map((item) => (
        <li key={item} className={styles.chip}>
          {item}
        </li>
      ))}
    </ul>
  );
}
