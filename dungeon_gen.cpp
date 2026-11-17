// PHIÊU LƯU THẾ GIỚI TRI THỨC - bộ sinh hầm ngục ngẫu nhiên (C++17).
// Cùng thuật toán xorshift32 với bản JavaScript trong game: cùng seed => cùng sơ đồ phòng.
// Biên dịch:  g++ -O2 -std=c++17 dungeon_gen.cpp -o dungeon_gen
// Chạy:       ./dungeon_gen 12345            (in sơ đồ 10 phòng)   |   ./dungeon_gen 12345 --json
// Biên dịch sang WebAssembly (nếu có Emscripten):
//   emcc dungeon_gen.cpp -O2 -s EXPORTED_FUNCTIONS=_gen_dungeon -s MODULARIZE=1 -o dungeon_gen.js
#include <cstdint>
#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <vector>
static const int GC = 5, GR = 4, ROOMS = 10;
struct Gen { uint32_t s; uint32_t next() { s ^= s << 13; s ^= s >> 17; s ^= s << 5; return s; } uint32_t rn(uint32_t n) { return next() % n; } };
// Ghi 10 ô (cột,hàng) vào out[20]; trả về số lần thử
extern "C" int gen_dungeon(uint32_t seed, int *out) {
    Gen g{(seed ^ 0x9E3779B9u) ? (seed ^ 0x9E3779B9u) : 1u};
    static const int DX[4][2] = {{1, 0}, {0, 1}, {0, -1}, {-1, 0}};
    int attempts = 0;
    for (;;) {
        ++attempts;
        bool vis[GC * GR] = {false};
        int P[ROOMS][2];
        P[0][0] = 0; P[0][1] = (int)g.rn(GR); vis[P[0][1] * GC] = true;
        bool ok = true;
        for (int i = 1; i < ROOMS; ++i) {
            int c = P[i - 1][0], r = P[i - 1][1], o[4][2], n = 0;
            for (auto &d : DX) { int nc = c + d[0], nr = r + d[1];
                if (nc >= 0 && nc < GC && nr >= 0 && nr < GR && !vis[nr * GC + nc]) { o[n][0] = nc; o[n][1] = nr; ++n; } }
            if (!n) { ok = false; break; }
            int k = (int)g.rn(n); P[i][0] = o[k][0]; P[i][1] = o[k][1]; vis[P[i][1] * GC + P[i][0]] = true;
        }
        if (ok) { for (int i = 0; i < ROOMS; ++i) { out[i * 2] = P[i][0]; out[i * 2 + 1] = P[i][1]; } return attempts; }
    }
}
int main(int argc, char **argv) {
    uint32_t seed = argc > 1 ? (uint32_t)strtoul(argv[1], nullptr, 10) : 1u; bool js = argc > 2 && !strcmp(argv[2], "--json");
    int out[20]; gen_dungeon(seed, out);
    if (js) { printf("{\"seed\":%u,\"rooms\":[", seed); for (int i = 0; i < ROOMS; ++i) printf("%s[%d,%d]", i ? "," : "", out[i * 2], out[i * 2 + 1]); printf("]}\n"); return 0; }
    for (int i = 0; i < ROOMS; ++i) printf("%d,%d%s", out[i * 2], out[i * 2 + 1], i < ROOMS - 1 ? ";" : "\n");
    return 0;
}
