import { useItemStore } from "../stores/itemsStore";
import Button from "./Button";

export default function ButtonGroup() {
  const markAllAsInComplete = useItemStore(
    (state) => state.markAllAsInComplete
  );
  const markAllAsComplete = useItemStore((state) => state.markAllAsComplete);
  const removeAllItem = useItemStore((state) => state.removeAllItem);
  const resetToInitial = useItemStore((state) => state.resetToInitial);

  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: markAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: markAllAsInComplete,
    },
    {
      text: "Reset to initial",
      onClick: resetToInitial,
    },
    {
      text: "Remove all items",
      onClick: removeAllItem,
    },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map(({ text, onClick }) => {
        return (
          <Button key={text} buttonType="secondary" onClick={onClick}>
            {text}
          </Button>
        );
      })}
    </section>
  );
}
