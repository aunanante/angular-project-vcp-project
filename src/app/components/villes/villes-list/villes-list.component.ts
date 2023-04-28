import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { VilleService } from 'src/app/services/ville.service';
import { Ville } from 'src/app/common/ville';

@Component({
  selector: 'app-villes-list',
  templateUrl: './villes-list.component.html',
  styleUrls: ['./villes-list.component.css']
})
export class VillesListComponent implements OnInit {
  
  dataSourceVille: MatTableDataSource<Ville>;
  displayedColumnsVille: string[] = ['id', 'villeName', 'action'];
  @ViewChild('TableVillePaginator', { static: true }) tableVillePaginator!: MatPaginator;
  @ViewChild('TableVilleSort', { static: true }) tableVilleSort!: MatSort;

  constructor(private villeService: VilleService) {
    this.dataSourceVille = new MatTableDataSource<Ville>();
  }

  ngOnInit(): void {
    this.listVilles();
    this.dataSourceVille.paginator = this.tableVillePaginator;
    this.dataSourceVille.sort = this.tableVilleSort;
  }

  listVilles() {
    this.villeService.getAllVilles().subscribe((data) => {
      this.dataSourceVille.data = data as Ville[];
    });
  }

  deleteVille(index: number, e: any){
    if(window.confirm('Are you sure')) {
      const data = this.dataSourceVille.data;
      data.splice((this.tableVillePaginator.pageIndex * this.tableVillePaginator.pageSize) + index, 1);
      this.dataSourceVille.data = data;
      this.villeService.deleteVilles(e.id).subscribe()
      
    }
  }

  onRowClicked(row: Ville) {
    console.log(row.id);
  }

}
