import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfigService } from 'src/app/Config/config.service'
import { MatPaginator, MatTableDataSource } from '@angular/material';

interface Totals {
  GamerTag: string;
  SpartanRank: string;
  TotalAssassinations: string;
  TotalAssists: string;
  TotalDeaths: string;
  TotalGamesCompleted: string;
  TotalGamesLost: string;
  TotalGamesTied: string;
  TotalGamesWon: string;
  TotalGrenadeKills: string;
  TotalGroundPoundDamage: string;
  TotalGroundPoundKills: string;
  TotalGrenadeDamage: string;
  TotalHeadshots: string;
  TotalKills: string;
  TotalMeleeDamage: string;
  TotalMeleeKills: string;
  TotalPowerWeaponKills: string;
  TotalShotsFired: string;
  TotalShotsLanded: string;
  TotalShoulderBashDamage: string;
  TotalShoulderBashKills: string;
  TotalSpartanKills: string;
  TotalWeaponDamage: string;
}

interface Medals {
  name: string;
  classification: string;
  contentId: string;
  description: string;
  difficulty: string;
  id: string;
  spriteLocation: string[];
}

interface Weapons {
  name: string;
  contentId: string;
  description: string;
  id: string;
  isUsableByPlayer: boolean;
  largeIconImageUrl: string;
  smallIconImageUrl: string;
  type: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'haloFun';
  
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild('weaponPaginator', {static: false}) weaponsPaginator: MatPaginator;  
  public selectedTab = 0;
  public samTotals: Totals;
  public samSpartanRank: string;
  public sData: any;
  public connorTotals: Totals;
  public connorSpartanRank: string;
  public cData: any;
  public tomTotals: Totals;
  public tomSpartanRank: string;
  public tData: any;
  medalsData: MatTableDataSource<Medals[]>;
  weaponsData: MatTableDataSource<Weapons[]>;
  public brosTotals: Totals[] = [];
  displayedColumns: string[] = ['gamerTag', 'spartanRank', 'assinations', 'assists', 'deaths', 'gamesCompleted',
  'gamesLost', 'gamesTied', 'gamesWon', 'grenadeKills',
  'groundPoundDamage', 'groundPoundKills', 'grenadeDamage', 'headshots',
  'kills', 'meleeDamage', 'meleeKills',
  'powerWeaponKills', 'shotsFired', 'shotsLanded', 'spartanKills', 'weaponDamage'];

  displayedMedalColumns: string[] = ['name', 'description', 'classification'];
  displayedWeaponColumns: string[] = ['name', 'description', 'smallIconImageUrl'];
  constructor(private configService: ConfigService ) { 
  }
  ngOnInit() {
    
    this.fetchMedals();
    this.fetchWeapons();
    this.fetchSam();
    this.fetchTom();
    this.fetchConnor();
    console.log('Bros Totals: ', this.brosTotals);
    
  }

  fetchMedals() {
    this.configService.getMedals()
      .subscribe((data: any) => {
          this.medalsData = new MatTableDataSource(data);
          console.log('Medals Data: ', this.medalsData);
      });
  }

  fetchWeapons() {
    this.configService.getWeapons()
      .subscribe((data: any) => {
          this.weaponsData = new MatTableDataSource(data);
          console.log('Weapons data: ', this.weaponsData);
      });
  }
  fetchSam() {
    this.configService.getConfig('AkaV1ct0rious')
        .subscribe((data: any) => { 
          this.sData = data.Results[0].Result.ArenaStats;
          this.samSpartanRank = data.Results[0].Result.SpartanRank;
          this.samTotals = {
            GamerTag: 'AkaV1ct0rious',
            SpartanRank: this.samSpartanRank,
            TotalAssassinations: this.sData.TotalAssassinations,
            TotalAssists: this.sData.TotalAssists,
            TotalDeaths: this.sData.TotalDeaths,
            TotalGamesCompleted: this.sData.TotalGamesCompleted,
            TotalGamesLost: this.sData.TotalGamesLost,
            TotalGamesTied: this.sData.TotalGamesTied,
            TotalGamesWon: this.sData.TotalGamesWon,
            TotalGrenadeKills: this.sData.TotalGrenadeKills,
            TotalGroundPoundDamage: this.sData.TotalGroundPoundDamage,
            TotalGroundPoundKills: this.sData.TotalGroundPoundKills,
            TotalGrenadeDamage: this.sData.TotalGrenadeDamage,
            TotalHeadshots: this.sData.TotalHeadshots,
            TotalKills: this.sData.TotalKills,
            TotalMeleeDamage: this.sData.TotalMeleeDamage,
            TotalMeleeKills: this.sData.TotalMeleeKills,
            TotalPowerWeaponKills: this.sData.TotalPowerWeaponKills,
            TotalShotsFired: this.sData.TotalShotsFired,
            TotalShotsLanded: this.sData.TotalShotsLanded,
            TotalShoulderBashDamage: this.sData.TotalShoulderBashDamage,
            TotalShoulderBashKills: this.sData.TotalShoulderBashKills,
            TotalSpartanKills: this.sData.TotalSpartanKills,
            TotalWeaponDamage: this.sData.TotalWeaponDamage
          };
          this.brosTotals.push(this.samTotals);
        });
    
  }

  fetchTom() {
    
    this.configService.getConfig('El Elegido225')
        .subscribe((data: any) => { 
          this.tData = data.Results[0].Result.ArenaStats;
          this.tomSpartanRank = data.Results[0].Result.SpartanRank;
          this.tomTotals = {
            GamerTag: 'El Elegido225',
            SpartanRank: this.tomSpartanRank,
            TotalAssassinations: this.tData.TotalAssassinations,
            TotalAssists: this.tData.TotalAssists,
            TotalDeaths: this.tData.TotalDeaths,
            TotalGamesCompleted: this.tData.TotalGamesCompleted,
            TotalGamesLost: this.tData.TotalGamesLost,
            TotalGamesTied: this.tData.TotalGamesTied,
            TotalGamesWon: this.tData.TotalGamesWon,
            TotalGrenadeKills: this.tData.TotalGrenadeKills,
            TotalGroundPoundDamage: this.tData.TotalGroundPoundDamage,
            TotalGroundPoundKills: this.tData.TotalGroundPoundKills,
            TotalGrenadeDamage: this.tData.TotalGrenadeDamage,
            TotalHeadshots: this.tData.TotalHeadshots,
            TotalKills: this.tData.TotalKills,
            TotalMeleeDamage: this.tData.TotalMeleeDamage,
            TotalMeleeKills: this.tData.TotalMeleeKills,
            TotalPowerWeaponKills: this.tData.TotalPowerWeaponKills,
            TotalShotsFired: this.tData.TotalShotsFired,
            TotalShotsLanded: this.tData.TotalShotsLanded,
            TotalShoulderBashDamage: this.tData.TotalShoulderBashDamage,
            TotalShoulderBashKills: this.tData.TotalShoulderBashKills,
            TotalSpartanKills: this.tData.TotalSpartanKills,
            TotalWeaponDamage: this.tData.TotalWeaponDamage
          };
          this.brosTotals.push(this.tomTotals);
        });
  }
  
  fetchConnor() {
    this.configService.getConfig('r3dfalc0n757')
        .subscribe((data: any) => { 
          this.cData = data.Results[0].Result.ArenaStats;
          this.connorSpartanRank = data.Results[0].Result.SpartanRank;
          this.connorTotals = {
            GamerTag:'r3dfalc0n757', 
            SpartanRank: this.connorSpartanRank,
            TotalAssassinations: this.cData.TotalAssassinations,
            TotalAssists: this.cData.TotalAssists,
            TotalDeaths: this.cData.TotalDeaths,
            TotalGamesCompleted: this.cData.TotalGamesCompleted,
            TotalGamesLost: this.cData.TotalGamesLost,
            TotalGamesTied: this.cData.TotalGamesTied,
            TotalGamesWon: this.cData.TotalGamesWon,
            TotalGrenadeKills: this.cData.TotalGrenadeKills,
            TotalGroundPoundDamage: this.cData.TotalGroundPoundDamage,
            TotalGroundPoundKills: this.cData.TotalGroundPoundKills,
            TotalGrenadeDamage: this.cData.TotalGrenadeDamage,
            TotalHeadshots: this.cData.TotalHeadshots,
            TotalKills: this.cData.TotalKills,
            TotalMeleeDamage: this.cData.TotalMeleeDamage,
            TotalMeleeKills: this.cData.TotalMeleeKills,
            TotalPowerWeaponKills: this.cData.TotalPowerWeaponKills,
            TotalShotsFired: this.cData.TotalShotsFired,
            TotalShotsLanded: this.cData.TotalShotsLanded,
            TotalShoulderBashDamage: this.cData.TotalShoulderBashDamage,
            TotalShoulderBashKills: this.cData.TotalShoulderBashKills,
            TotalSpartanKills: this.cData.TotalSpartanKills,
            TotalWeaponDamage: this.cData.TotalWeaponDamage
          };
          this.brosTotals.push(this.connorTotals);
        });
  }
  displaySamTotals() {
    console.log('Sam: ', this.samTotals);
  }
  
  displayConnorTotals() {
    console.log('Connor: ', this.connorTotals);
  }

  displayTomTotals() {
    console.log('Tom: ', this.tomTotals);
  }

  goToStatsTab() {
    this.selectedTab = 1;
  }

  goToBestPlayer() {
    this.selectedTab = 3;
  }
  goToAlgorithm() {
    this.selectedTab = 2;
  }

  tabChange(event: any) {
    console.log('Tab change event: ',event);
    if (event.index === 1) {
      this.medalsData.paginator = this.paginator;
      this.weaponsData.paginator = this.weaponsPaginator;
    }
  }
}
