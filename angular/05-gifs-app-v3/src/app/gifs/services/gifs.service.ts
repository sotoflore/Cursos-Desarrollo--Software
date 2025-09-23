import { HttpClient } from "@angular/common/http";
import { computed, effect, inject, Injectable, signal } from "@angular/core";
import { map, Observable, of, tap } from "rxjs";
import { environment } from "@environments/environment";
import { GiphyResponse } from "../interfaces/giphy.interface";
import { Gif } from "../interfaces/gif.interface";
import { GifMapper } from "../mapper/gif.mapper";

const GIF_KEY = 'gifs';

const loadFromLocalStorage = () => {
    const gifsFromLocalStorage = localStorage.getItem(GIF_KEY) ?? '{}'; //Record<string, Gif[]>
    const gifs = JSON.parse(gifsFromLocalStorage) as Record<string, Gif[]>;
    return gifs;
}

@Injectable({ providedIn: 'root' })
export class GifService{

    private http = inject(HttpClient);

    trendingGifs = signal<Gif[]>([]);
    trendingGifsLoading = signal(false);
    private trendingPage = signal(0);

    trendingGifGroup = computed<Gif[][]>(() => {
        const groups = [];
        for (let i = 0; i < this.trendingGifs().length; i += 3){
            groups.push(this.trendingGifs().slice(i, i + 3));
        }

        return groups;
    })

    searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
    searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

    constructor() {
        this.loadTrendingGifs();
    }

    saveGifsToLocalStorage = effect(() => {
        const historyString = JSON.stringify(this.searchHistory());
        localStorage.setItem(GIF_KEY, historyString);
    })

    loadTrendingGifs() {

        if (this.trendingGifsLoading()) return;

        this.trendingGifsLoading.set(true);

        this.http.get<GiphyResponse>(`${environment.giphyUrlApi}/gifs/trending`, {
            params: {
                api_key: environment.giphyApiKey,
                limit: 20,
                offset: this.trendingPage() * 20,
                //rating: 'g'
            }
        }).subscribe(resp => {
            const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
            this.trendingGifs.update(currentGifs => [...currentGifs, ...gifs]);
            this.trendingPage.update(current => current + 1);
            this.trendingGifsLoading.set(false);
        });
    }

    searchGifs(query: string): Observable<Gif[]> {
        return this.http.get<GiphyResponse>(`${environment.giphyUrlApi}/gifs/search`, {
            params: {
                api_key: environment.giphyApiKey,
                q: query,
                limit: 25,
                //rating: 'g'
            }
        }).pipe(
            map(({ data }) => data),
            map(items => GifMapper.mapGiphyItemsToGifArray(items)),

            tap(items => {
                this.searchHistory.update(history => ({
                    ...history,
                    [query.toLowerCase()]: items
                }))
            })
        );
        //     .subscribe(resp => {
        //     const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
        //     console.log(gifs);

        // })
    }

    getHistoryGifs(query: string):Gif[] {
        return this.searchHistory()[query.toLowerCase()] ?? [];
    }


}