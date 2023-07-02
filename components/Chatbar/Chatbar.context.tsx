import { Dispatch, createContext } from 'react';

import { ActionType } from '@/hooks/useCreateReducer';

import { Conversation } from '@/types/chat';
import { SupportedExportFormats } from '@/types/export';
import { PluginKey } from '@/types/plugin';

import { ChatbarInitialState } from './Chatbar.state';

export interface ChatbarContextProps {
  state: ChatbarInitialState;
  dispatch: Dispatch<ActionType<ChatbarInitialState>>;
  handleDeleteConversation: (conversation: Conversation);
  handleClearConversations: ();
  handleExportData: ();
  handleImportConversations: (data: SupportedExportFormats);
  handlePluginKeyChange: (pluginKey: PluginKey);
  handleClearPluginKey: (pluginKey: PluginKey);
  handleApiKeyChange: (apiKey: string);
}

const ChatbarContext = createContext<ChatbarContextProps>(undefined!);

export default ChatbarContext;
