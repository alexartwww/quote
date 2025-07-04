import './index.css';

import {IconAlignLeft, IconAlignCenter, IconQuote} from '@codexteam/icons';
import {make} from '@editorjs/dom';
import type {API, BlockAPI, BlockTool, ToolConfig, SanitizerConfig, ConversionConfig} from '@editorjs/editorjs';
import type {MenuConfig} from '@editorjs/editorjs/types/tools';
import {HTMLPasteEvent, PasteConfig} from '@editorjs/editorjs';
import HTMLJanitor from 'html-janitor';

/**
 * Quote Tool`s initial configuration
 */
export interface QuoteConfig extends ToolConfig {
  /**
   * Placeholder text to display in the quote's text input.
   */
  quotePlaceholder?: string;

  /**
   * Placeholder text to display in the quote's caption input.
   */
  captionPlaceholder?: string;

  /**
   * Default alignment for the quote.
   */
  defaultAlignment?: Alignment;
}

/**
 * Quote Tool`s input and output data
 */
export interface QuoteData {
  /**
   * The text of the quote.
   */
  text: string;

  /**
   * The caption for the quote.
   */
  caption: string;

  /**
   * The alignment of the quote.
   */
  alignment: Alignment;
}

/**
 * Constructor params for the Quote tool, use to pass initial data and settings
 */
interface QuoteParams {
  /**
   * Initial data for the quote
   */
  data: QuoteData;
  /**
   * Quote tool configuration
   */
  config?: QuoteConfig;
  /**
   * Editor.js API
   */
  api: API;
  /**
   * Is quote read-only.
   */
  readOnly: boolean;
  /**
   * BlockAPI object of Quote.
   */
  block: BlockAPI;
}

/**
 * CSS classes names
 */
interface QuoteCSS {
  /**
   * Editor.js CSS Class for block
   */
  baseClass: string;
  /**
   * Quote CSS Class
   */
  wrapper: string;
  /**
   * Quote CSS Class
   */
  input: string;
  /**
   * Quote CSS Class
   */
  text: string;
  /**
   * Quote CSS Class
   */
  caption: string;
}

/**
 * Enum for Quote Alignment
 */
enum Alignment {
  /**
   * Left alignment
   */
  Left = 'left',
  /**
   * Center alignment
   */
  Center = 'center'
}

interface HTMLPasteEventDetail {
  data: HTMLElement;
}

interface HTMLPasteEventDetailExtended extends HTMLPasteEventDetail {
  data: {} & HTMLElement;
}

/**
 * Quote Tool for Editor.js
 */
export default class Quote implements BlockTool {
  /**
   * The Editor.js API
   */
  private api: API;
  /**
   * Is Quote Tool read-only
   */
  private readOnly: boolean;

  /**
   * Placeholder for Quote Tool
   */
  private quotePlaceholder: string;

  /**
   * Current quote element
   */
  private block: BlockAPI;

  /**
   * Caption placeholder for Quote Tool
   */
  private captionPlaceholder: string;

  /**
   * Quote Tool's data
   */
  private data: QuoteData;

  /**
   * Quote Tool's CSS classes
   */
  private css: QuoteCSS;

  private element: HTMLElement | undefined;

  /**
   * Render plugin`s main Element and fill it with saved data
   * @param params - Quote Tool constructor params
   * @param params.data - previously saved data
   * @param params.config - user config for Tool
   * @param params.api - editor.js api
   * @param params.readOnly - read only mode flag
   */
  constructor({ data, config, api, readOnly, block }: QuoteParams) {
    console.log('Quote Artem Aleksashkin version 2');
    const { DEFAULT_ALIGNMENT } = Quote;

    this.api = api;
    this.readOnly = readOnly;

    this.quotePlaceholder
      = api.i18n.t(config?.quotePlaceholder ?? Quote.DEFAULT_QUOTE_PLACEHOLDER);
    this.captionPlaceholder
      = api.i18n.t(config?.captionPlaceholder ?? Quote.DEFAULT_CAPTION_PLACEHOLDER);

    this.data = {
      text: data.text || '',
      caption: data.caption || '',
      alignment: Object.values(Alignment).includes(data.alignment)
        ? data.alignment
        : config?.defaultAlignment ?? DEFAULT_ALIGNMENT,
    };
    this.css = {
      baseClass: this.api.styles.block,
      wrapper: 'cdx-quote',
      text: 'cdx-quote__text',
      input: this.api.styles.input,
      caption: 'cdx-quote__caption',
    };
    this.block = block;
  }

  /**
   * Notify core that read-only mode is supported
   * @returns true
   */
  public static get isReadOnlySupported(): boolean {
    return true;
  }

  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   * @returns icon and title of the toolbox
   */
  public static get toolbox(): {
    /**
     * Tool icon's SVG
     */
    icon: string;
    /**
     * title to show in toolbox
     */
    title: 'Quote';
  } {
    return {
      icon: IconQuote,
      title: 'Quote',
    };
  }

  /**
   * Empty Quote is not empty Block
   * @returns true
   */
  public static get contentless(): boolean {
    return true;
  }

  /**
   * Allow to press Enter inside the Quote
   * @returns true
   */
  public static get enableLineBreaks(): boolean {
    return true;
  }

  /**
   * Default placeholder for quote text
   * @returns 'Enter a quote'
   */
  public static get DEFAULT_QUOTE_PLACEHOLDER(): string {
    return 'Enter a quote';
  }

  /**
   * Default placeholder for quote caption
   * @returns 'Enter a caption'
   */
  public static get DEFAULT_CAPTION_PLACEHOLDER(): string {
    return 'Enter a caption';
  }

  /**
   * Default quote alignment
   * @returns Alignment.Left
   */
  public static get DEFAULT_ALIGNMENT(): Alignment {
    return Alignment.Left;
  }

  /**
   * Allow Quote to be converted to/from other blocks
   * @returns conversion config object
   */
  public static get conversionConfig(): ConversionConfig {
    return {
      /**
       * To create Quote data from string, simple fill 'text' property
       */
      import: 'text',
      /**
       * To create string from Quote data, concatenate text and caption
       * @param quoteData - Quote data object
       * @returns string
       */
      export: function (quoteData: QuoteData): string {
        return quoteData.caption
          ? `${quoteData.text} — ${quoteData.caption}`
          : quoteData.text;
      },
    };
  }

  /**
   * Tool`s styles
   * @returns CSS classes names
   */
  public get CSS(): QuoteCSS {
    return {
      baseClass: this.api.styles.block,
      wrapper: 'cdx-quote',
      text: 'cdx-quote__text',
      input: this.api.styles.input,
      caption: 'cdx-quote__caption',
    };
  }

  /**
   * Tool`s settings properties
   * @returns settings properties
   */
  public get settings(): {
    /**
     * Alignment name
     */
    name: Alignment;
    /**
     * Alignment icon
     */
    icon: string;
  }[] {
    return [
      {
        name: Alignment.Left,
        icon: IconAlignLeft,
      },
      {
        name: Alignment.Center,
        icon: IconAlignCenter,
      },
    ];
  }

  /**
   * Create Quote Tool container with inputs
   * @returns blockquote DOM element - Quote Tool container
   */
  public render(): HTMLElement {
    if (!this.element) {
      this.element = make('blockquote', [
        this.css.baseClass,
        this.css.wrapper,
      ]);
    } else {
      this.element.querySelectorAll('div').forEach((item) => {
        item.remove();
      });
    }
    const quote = make('div', [this.css.input, this.css.text], {
      contentEditable: !this.readOnly,
      innerHTML: this.data.text,
    });
    const caption = make('div', [this.css.input, this.css.caption], {
      contentEditable: !this.readOnly,
      innerHTML: this.data.caption,
    });

    quote.dataset.placeholder = this.quotePlaceholder;
    caption.dataset.placeholder = this.captionPlaceholder;

    this.element.appendChild(quote);
    this.element.appendChild(caption);

    return this.element;
  }

  /**
   * Extract Quote data from Quote Tool element
   * @param quoteElement - Quote DOM element to save
   * @returns Quote data object
   */
  public save(quoteElement: HTMLDivElement): QuoteData {
    const text = quoteElement.querySelector(`.${this.css.text}`);
    const caption = quoteElement.querySelector(`.${this.css.caption}`);

    return Object.assign(this.data, {
      text: text?.innerHTML ?? '',
      caption: caption?.innerHTML ?? '',
    });
  }

  /**
   * Used by Editor paste handling API.
   * Provides configuration to handle P tags.
   *
   * @returns {PasteConfig} - Paragraph Paste Setting
   */
  static get pasteConfig(): PasteConfig {
    return {
      tags: [
        {
          blockquote: {},
        },
      ],
    };
  }

  static get blockConfig(): { [param: string]: boolean } {
    return {
      'ignoreContainsAnotherToolTags': true,
      'skipSanitizer': true,
    };
  }

  /**
   * On paste callback fired from Editor.
   *
   * @param {HTMLPasteEvent} event - event with pasted data
   */
  onPaste(event: HTMLPasteEvent): void {
    switch (event.type) {
      case 'tag':
        const blockquote = (event.detail as HTMLPasteEventDetailExtended).data as HTMLIFrameElement;
        const sanitizerConfig = {
          tags: {
            p: {},
            a: {
              href: true,
              target: '_blank',
              rel: 'nofollow'
            },
            b: {},
            br: {},
            strong: {},
            i: {},
            em: {}
          }
        };
        const sanitizerInstance = new HTMLJanitor(sanitizerConfig);
        const cleanText:string = sanitizerInstance.clean(blockquote.innerHTML);
        const wrapper = make('DIV');
        wrapper.innerHTML = cleanText;
        const replaceParagraphsWithBreaks = (element: Element | Document | null): void => {
          if (!element) {
            return;
          }

          // Находим все параграфы в текущем элементе
          const paragraphs = element.querySelectorAll('p');

          paragraphs.forEach((p: HTMLParagraphElement) => {
            // Создаем массив узлов, которые нужно вставить перед параграфом
            const nodesToInsert: Node[] = [];

            // Если параграф не пустой и не первый в родителе, добавляем <br> перед ним
            if (p.previousSibling && p.innerHTML.trim() !== '') {
              nodesToInsert.push(document.createElement('br'));
            }

            // Переносим всех детей параграфа перед самим параграфом
            while (p.firstChild) {
              // Рекурсивно обрабатываем вложенные элементы (если это Element)
              if (p.firstChild instanceof Element) {
                replaceParagraphsWithBreaks(p.firstChild);
              }
              nodesToInsert.push(p.firstChild);
              p.removeChild(p.firstChild);
            }

            // Проверяем, что у параграфа есть родительский элемент
            if (p.parentNode) {
              // Вставляем все узлы перед параграфом
              nodesToInsert.forEach(node => {
                p.parentNode!.insertBefore(node, p);
              });

              // Удаляем пустой параграф
              p.parentNode.removeChild(p);
            }
          });
        };
        replaceParagraphsWithBreaks(wrapper);

        this.data.text = sanitizerInstance.clean(wrapper.innerHTML);

        this.render();

        break;
    }
  }

  /**
   * Sanitizer rules
   * @returns sanitizer rules
   */
  public static get sanitize(): SanitizerConfig {
    return {
      text: {
        p: true,
        br: true,
        div: true,
      },
      caption: {},
      alignment: {},
    };
  }

  /**
   * Create wrapper for Tool`s settings buttons:
   * 1. Left alignment
   * 2. Center alignment
   * @returns settings menu
   */
  public renderSettings(): HTMLElement | MenuConfig {
    const capitalize = (str: string): string =>
      str ? str[0].toUpperCase() + str.slice(1) : str;

    return this.settings.map(item => ({
      icon: item.icon,
      label: this.api.i18n.t(`Align ${capitalize(item.name)}`),
      onActivate: () => this._toggleTune(item.name),
      isActive: this.data.alignment === item.name,
      closeOnActivate: true,
    }));
  }

  /**
   * Toggle quote`s alignment
   * @param tune - alignment
   */
  private _toggleTune(tune: Alignment): void {
    this.data.alignment = tune;

    // Dispatch change if quoteElement already exists
    this.block.dispatchChange();
  }
}
