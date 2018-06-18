set clipboard=unnamed
execute pathogen#infect()

set backupdir=/Users/felixg/temp
set directory=/Users/felixg/temp

inoremap jj <Esc>
let mapleader = ','
nnoremap <leader>d :call NERDTreeToggleInCurDir()<CR>
nnoremap <leader>j :NERDTreeFromBookmark JS_Src<CR>
nnoremap <leader>J :NERDTreeFromBookmark JSP<CR>
nnoremap <leader>t :NERDTreeFromBookmark JS_Test<CR>
nnoremap <leader>q :q!<cr>
nnoremap <leader>m :MRU<cr>

nnoremap ' `
nnoremap ` '

nnoremap <leader>nl <C-W>l    
nnoremap <leader>nk <C-W>k    
nnoremap <leader>nj <C-W>j    
nnoremap <leader>nh <C-W>h

syntax enable
syntax on
filetype plugin indent on
set guioptions-=T "hide toolbar
 
set laststatus=2
set modifiable
set smartindent
set autochdir
autocmd BufWritePost *.js :JSHint
set hlsearch
set tags=tags

set nocompatible
set guifont=consolas:h13
set wrap
set foldcolumn=0
set foldmethod=indent
set number
set relativenumber

let NERDTreeQuitOnOpen=1
let g:session_autosave='no'
let g:session_autoload='no'

set wildignore+=*/tmp/*,*.so,*.swp,*.zip     " MacOSX/Linux

let g:ctrlp_custom_ignore = '\v[\/]\.(git|hg|svn)$'
let g:ctrlp_custom_ignore = {
  \ 'dir':  '\v[\/]\.(git|hg|svn)$',
  \ 'file': '\v\.(exe|so|dll)$',
  \ 'link': 'some_bad_symbolic_links',
  \ }

" Open NERDTree in the directory of the current file (or /home if no file is open)
function! NERDTreeToggleInCurDir()
  " If NERDTree is open in the current buffer
  if (exists("t:NERDTreeBufName") && bufwinnr(t:NERDTreeBufName) != -1)
    exe ":NERDTreeClose"
  else
    exe ":NERDTreeFind"
  endif
endfunction
