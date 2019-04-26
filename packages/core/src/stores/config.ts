import { Namespace } from "@frontity/types/namespace";
import { namespaced } from "overmind/config";
import settings from "./settings";

export default ({ namespaces }: { namespaces: { [key: string]: Namespace } }) =>
  namespaced(
    Object.entries(namespaces).reduce(
      (config, [namespace, module]) => {
        if (module.Store) config[namespace] = module.Store;
        return config;
      },
      { settings }
    )
  );
