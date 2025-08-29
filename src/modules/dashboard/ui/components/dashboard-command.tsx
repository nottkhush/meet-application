import { CommandResponsiveDialog, CommandInput } from "@/components/ui/command";
import { CommandItem, CommandList } from "cmdk";
import { Dispatch, SetStateAction } from "react";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export const DashboardCommand = ({ open, setOpen }: Props) => {
  return (
    <CommandResponsiveDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Find a meeting or an agent" />
      <CommandList>
        <CommandItem>Test1</CommandItem>
        <CommandItem>Test2</CommandItem>
        <CommandItem>Test3</CommandItem>
      </CommandList>
    </CommandResponsiveDialog>
  );
};
